/*
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const schedule = require ('node-schedule');

const api = require('./server/routes/api');

const getBSE_data = require('./server/routes/BSE_data');
const updateStocksWithDailyData = getBSE_data.updateStocksWithDailyData;
const getZipAndExtract = getBSE_data.getZipAndExtract;
const compareForNewCodes = getBSE_data.compareForNewCodes;
const compareForOldCodes = getBSE_data.compareForOldCodes;

const port=3000;

const app=express();
 
app.listen(port,function(){
    console.log("Server is listening at port:" + port);
}); 


app.use(express.static(path.join(__dirname, '../finakyaStocks/src/dist'))); //getting acess to the dist folder

app.use(bodyParser.urlencoded({extended: true})); //parses the text as url encoded data
app.use(bodyParser.json()); //parses the text as json

app.use('/api',api);

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
}); 



//to update daily stock prices
var j = schedule.scheduleJob({hour: 03, minute: 00, second: 00}, function()
{
    updateStocksWithDailyData();  
});


//to get the metadata for comparison
var j2 = schedule.scheduleJob({hour: 00, minute: 00, second: 00}, function()
{
    getZipAndExtract();
});

var j3 = schedule.scheduleJob({hour: 00, minute: 05, second: 00}, function()
{
    compareForNewCodes();
});

var j3 = schedule.scheduleJob({hour: 00, minute: 30, second: 00}, function()
{
    compareForOldCodes();
});
*/