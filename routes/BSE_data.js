const request = require('request');
const fs = require('fs');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const extract = require('extract-zip');
const csv = require('csvtojson');

const stocksModel = require('../models/stocksSchema');
const initialMetadata = require('../models/metadataSchema');
const newMetadata = require('../models/tempMetadataSchema');


const csvFilePath =  '/finakya-stocks-mf-api/finakyaBackend/server/BSE_meta.csv';
const tempCsvFilePath = '/finakya-stocks-mf-api/finakyaBackend/server/BSE_metadata.csv';

//connecting to database
const db = "mongodb+srv://Username:<Password>@cluster0.ipjoo.gcp.mongodb.net/<Databasename>?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(db, {useNewUrlParser : true, useUnifiedTopology: true}, function(error){
    if (error)
        console.log("Error!" + error);
});



//fn to retrieve initial metadata from downloaded .csv file and store it in a permanent db colletion
//Also retrieves the initial codes and stores them in an array
async function getInitialCodes(jsonArray)
{
    var initialCodes = [];

    //console.log(typeof jsonArray);
    try
    {
        if (typeof jsonArray === 'undefined')
            jsonArray = await csv().fromFile(csvFilePath);    //converting .csv file contents into a json array
        
        for (let record in jsonArray)                    // saving the contents(metadata) of json objects to a db collection
        {
            var initialMetaModel = new initialMetadata();

            await Promise.all([

                initialMetaModel.Code = jsonArray[record].code,
                initialMetaModel.CompanyName = jsonArray[record].name,
                initialMetaModel.Description = jsonArray[record].description,
                initialMetaModel.Refreshed_At = jsonArray[record].refreshed_at,
                initialMetaModel.From_Date = jsonArray[record].from_date,
                initialMetaModel.To_Date = jsonArray[record].to_date 
            ]);

            await initialMetaModel.save(function(err)
            {
                if (err)
                    console.log(err);          
            }); 

        }         // end of loop

        console.log('Metadata saved!');

        for (let record in jsonArray)                            // saving the codes to an array
        {
            initialCodes[record] = jsonArray[record].code;
        }
        console.log('Initial codes fetched.');
        //console.log(initialCodes);

        setTimeout(function()
        {
            getAndStoreData(initialCodes);
        },60000); 
    }
    catch(error)
    {
        console.log(error);
    }
}



// fn to store BSE data to database 
async function getAndStoreData(codes,date)                 
{
    var code, url, stocks, size;
    
    for (var i in codes)                              // loop through each code 
    {
        code = codes[i]; 

        if (typeof date === 'undefined')
            url = `https://www.quandl.com/api/v3/datasets/BSE/${code}.json?api_key=AxRvGc-cgtRgMphua6dJ`; 
        else
            url = `https://www.quandl.com/api/v3/datasets/BSE/${code}?start_date=${date}&end_date=${date}&api_key=AxRvGc-cgtRgMphua6dJ`;

        try 
        {
            const response = await fetch(url);        
            const json_ob = await response.json();

            if(json_ob.dataset == undefined)
            {
                console.log('Sorry! No data found.');
                continue;
            }   

            else
            {
                console.log(code + ' fetched!');
                     
                name = json_ob.dataset.name;             // Company Name 
                desc = json_ob.dataset.description;

                size = json_ob.dataset.data.length;      // No. of days (between From_Date to To_Date)
                console.log(size);           

                for (let j = 0; j < size; j++)          // Data for each day (from From_Date to To_Date)
                {
                    stocks = new stocksModel();

                    var data_obj = json_ob.dataset.data[j];

                    var result = await Promise.all([

                        stocks.Code = code,
                        stocks.CompanyName = name,
                        stocks.Description = desc,

                        stocks.Date_of_Record = data_obj[0],
                        stocks.Open = data_obj[1],
                        stocks.High = data_obj[2],
                        stocks.Low = data_obj[3],
                        stocks.Close = data_obj[4],
                        stocks.WAP = data_obj[5],
                        stocks.No_of_shares = data_obj[6],
                        stocks.No_of_trades = data_obj[7],
                        stocks.Total_Turnover = data_obj[8],
                        stocks.Deliverable_Quantity = data_obj[9],
                        stocks.Perc_Deli_Qty_To_Traded_Qty = data_obj[10],
                        stocks.Spread_H_L = data_obj[11],
                        stocks.Spread_C_O = data_obj[12]                
                    ]);

                    var saving = await stocks.save(function(error)
                    {
                        if (error)
                            console.log(error);                         
                    });   

                }  //end of inner loop 
            }  //end of else

        }   // end of try       
            
        catch (error) 
        {
            console.log(error);
        }

        /*var end = Date.now() + 70000;
        while (Date.now() < end) ;  */

        /*setTimeout(function()
        {
            continue;
        },70000); */

    } // end of outer loop 

    console.log('Done!');  
} 



//fn to update the db data collection each day with last day's values for each codes
function updateStocksWithDailyData()
{
    var codes = [];
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
    //console.log(date); 


    //get codes from metadata collection and call getAndStoreData() to store regular stock details to data collection
    initialMetadata.find({},{_id : 0, Code : 1}, function(error, data)
    {
        if (error)
            console.log(error);
        else
        {
            for (let i in data)
            {
                codes[i] = data[i].Code;
            }
            
            getAndStoreData(codes,date);        
        }        
    });    
}



//COMPARISON TO CHECK FOR ADDITION AND DELETION OF COMPANIES TO BSE

//fn to download metadata using Quandl (metadata) API, store the contents in a .zip file and then extract into a .csv file 
function getZipAndExtract()
{
    var metaUrl = 'https://www.quandl.com/api/v3/databases/BSE/metadata?api_key=AxRvGc-cgtRgMphua6dJ';
    var output = 'BSE_metadata_new.zip';
    var targetPath = '/finakya-stocks-mf-api/finakyaBackend/server/';
       
    request({url: metaUrl, encoding: null}, function(err, resp, body)
    {
        if(err)
            throw err;
        fs.writeFile(output, body, async function(err)
        {
            console.log("file written!");
            try 
            {
                await extract(output, { dir: targetPath });
                console.log('Extraction complete');

                deleteFromCollection();
            }
            catch (err) 
            {
                console.log('Caught error!')
                console.log(err)
            }       
        });
    });
}



//fn to be schedule-called to remove existing records from the TEMPORARY metadata db collection
function deleteFromCollection()
{
    newMetadata.deleteMany({}, function(error)
    {
        if (error)
            console.log(error);
        else
        {
            console.log('deleted');
            saveMetadataToDatabase();
        }
    });
}



//fn to be sschedule-called and regular metadata to be saved in a temporary db collection
async function saveMetadataToDatabase()                         
{
    try
    {
        const tempJsonArray = await csv().fromFile(tempCsvFilePath);
        for (let record in tempJsonArray)
        {
            var newMetaModel = new newMetadata();

            await Promise.all([

                newMetaModel.Code = tempJsonArray[record].code,
                newMetaModel.CompanyName = tempJsonArray[record].name,
                newMetaModel.Description = tempJsonArray[record].description,
                newMetaModel.Refreshed_At = tempJsonArray[record].refreshed_at,
                newMetaModel.From_Date = tempJsonArray[record].from_date,
                newMetaModel.To_Date = tempJsonArray[record].to_date 
            ]);

            await newMetaModel.save(function(err)
            {
                if (err)
                {
                    console.log(err);
                }                                                   
            });   
        }

        console.log('New Metadata saved!');
    }
    catch (error)
    {
        console.log(error);
    }
}



//fn to be schedule-called for comparison between permanent and temporary metadata db collections
function compareForNewCodes ()
{
    initialMetadata.distinct('Code',function(error,initialCodes)
    {
        if (error)
            console.log(error);
        else
        {
            //console.log(initialCodes);   
            newMetadata.distinct('Code', { 'Code': { $nin: initialCodes }}, function(err,newCodes) 
            {
                if (err)
                    console.log(err);
                else
                {
                    console.log(newCodes);  
                    //console.log(newCodes.length);
                    if (newCodes.length != 0)
                    {
                        //store codes to initial metadata collection
                        newMetadata.find({Code: {$in : newCodes}}, {_id : 0, __v : 0 }, function(er, data)
                        {
                            getInitialCodes(data);
                        });
                    }                        
                }      
            }); 
        }   
    });
}



//fn to be schedule-called for comparison between permanent and temporary metadata db collections
function compareForOldCodes()
{
    newMetadata.distinct('Code',function(error,newCodes)
    {
        if (error)
            console.log(error);
        else
        {
            //console.log(newCodes);
            //console.log(newCodes.length);
            initialMetadata.distinct('Code', { 'Code': { $nin: newCodes }, 'Status' : { $ne : 'Dead'}}, function(err,oldCodes) 
            {
                if (err)
                    console.log(err);
                else
                {
                    console.log(oldCodes);  
                    //console.log(oldCodes.length);
                    // call the update fn
                    if (oldCodes.length != 0)
                        updateOldCodes(oldCodes);                   
                }      
            }); 
        }   
    });
}



//fn to update the status (to dead) of companies
function updateOldCodes(codes)
{
    for (let i in codes)
    {
        var code = codes[i];

        stocksModel.find({Code : code}, { __v : 0}, function(error,data)     // to update status in BSE data collection
        {
            if (error)
                console.log(error);
            else
            {
                for (let i in data)
                {
                    data[i].Status = 'Dead';
                    data[i].save(function(err)
                    {
                        if (err)
                            console.log(err);
                    });
                }          
            }
        });

        initialMetadata.findOne({Code : code}, function(error,data)     //to update status in permanent metadata collection
        {
            if (error)
                console.log(error);
            else
            {
                data.Status = 'Dead';
        
                data.save(function(err)
                {
                    if (err)
                        console.log(err);
                });
            }
        });

    }
    console.log("Old records updated.");
}


module.exports = {
    getInitialCodes,
    updateStocksWithDailyData,
    getZipAndExtract,
    compareForNewCodes,
    compareForOldCodes
};