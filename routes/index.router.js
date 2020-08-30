const express = require('express');
const router = express.Router();
const jwtVerify = require('../config/jwtHelper');
const passport = require('passport');

//

const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const fetch = require('node-fetch');

const loginModel = require('../models/loginSchema');
const stocksModel = require('../models/stocksSchema');

const BSE_data = require('./BSE_data');
const getInitialCodes = BSE_data.getInitialCodes;
//




const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);

router.post('/login', ctrlUser.authenticate);

router.post('/forgot', ctrlUser.forgot);

router.get('/reset/:token', ctrlUser.reset);
router.post('/reset/:token', ctrlUser.resetPassword);


// 






var len = 0;

//connecting to database
const db = "mongodb+srv://prerana98:Technocrats@cluster0.ipjoo.gcp.mongodb.net/FinakyaStocks?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(db, {useNewUrlParser : true, useUnifiedTopology: true}, function(error){
    if (error)
        console.log("Error!" + error);
});


//login api
router.post('/signin',function(req,res){

    console.log("New login process");
    
    loginModel.findOne({emailID : req.body.emailID}, function(error,data)
    {
        //console.log(data);
        if(error)
        {
            console.log(error);
            res.status(500);
            res.send('Error in finding record!');  
        }
        else
        {
            if(!data)
            {
                console.log("No user found");
                res.status(404);
                res.send("User not registered.Please signup!");
            }
            else
            {
                if(password==data.password)
                {
                    res.status(200);
                    res.send('Login successful!');
                }
                else
                {
                    res.status(500);
                    res.send("Wrong password");
                }              
            }
        }        
    });
});


//signup api
router.post('/signup',function(req,res)
{
    console.log('New signup process');
    var newSignup = new loginModel();

    newSignup.name = req.body.name;
    newSignup.emailID = req.body.emailID;
    newSignup.password = req.body.password; 

    var query = {"emailID": req.body.emailID};
    
    loginModel.find(query,function(err,data)
    {
        if (err)
        {
            console.log(err);
            res.status(500);
            res.send('Error in finding record!');
        }    
        else
        {
            //console.log(data);
            len = data.length;
            if (len > 0)

                res.send("You have already signed up.");
            else
            {
                newSignup.save(function(error,SignupData){
                    if (error)
                    {
                        console.log(error);
                        res.status(500);
                        res.send('Error in saving signup details');          
                    }  
                    else
                    {
                        res.status(200);
                        //res.json(data);
                        res.send('Signup successful!');
                    }
                    //mongoose.connection.close();
                });                                 
            } 
        }
    });    
});


router.get('/BSE',function(req,res)
{
    getInitialCodes().then(function()
    {
        res.status(200);
        res.send('ok');
    });
});


//data search 
/*router.post('/stocks',function(req,res)
{
    console.log('Get request for a single data');
    stocksModel.find({$or :[{Code : req.body.Code},{CompanyName : req.body.CompanyName}]},{_id:0,__v:0},function(err,data)
    {
        if(err)
        {
            console.log(err);
            res.status(500);
            res.send("Error Retrieving Data!");
        }
        else
        {
            res.json(data); 
            console.log("Data Retrieved!");
        }
    });
});*/


router.post('/stocks',function(req,res)
{
    if (req.body.Code || req.body.CompanyName)
    {
        //console.log('Post request for a single data');
        //No filtration
        if (!req.body.RecDate)
        {   
            stocksModel.find({$or :[{Code : req.body.Code},{CompanyName : req.body.CompanyName}]}).sort({Date_of_Record : -1}).limit(1).exec(function(err,data)
            {
                if(err)
                {
                    console.log(err);
                    res.status(500);
                    res.send("Error Retrieving Data!");
                }
                else
                {
                    res.json(data); 
                    console.log("Data Retrieved!");
                }
            });
        }
        //Filtration by a particular date
        else
        {
            stocksModel.find({$or :[{Code : req.body.Code},{CompanyName : req.body.CompanyName}],Date_of_Record : req.body.RecDate},{_id:0,__v:0},function(err,data)
            {
                if(err)
                {
                    console.log(err);
                    res.status(500);
                    res.send("Error Retrieving Data!");
                }
                else
                {
                    res.json(data); 
                    console.log("Data Retrieved!");
                }
            });
        }    
    }
    else
    {
        res.send('Please enter the company name or code!');
    }    
});

//retrieving top 5 data according to Total_Turnover
router.post('/sort',function(req,res)
{
    var mysort={ Total_Turnover: -1 };
    var data=[];
    stocksModel.find({}).sort(mysort).exec(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.status(500);
            res.send("Error sorting Data!");
        }
        else
        {
            //res.send(result);
            for(let i in result)
            {
                if(i<5)
                {
                    data[i]=result[i];
                }
            }
            res.send(data);
            console.log("Sorted!")
        }
    });
});

//module.exports=router;


// 

// router.get('/auth/google', passport.authenticate('google', {
//   scope: ['profile']
// }), (req, res)=> {
//   res.status(200).json({status: true});
// });

// router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
//   res.send('You have reached the callback url');
// });

router.get('/user-profile', jwtVerify.verifyJwtToken, ctrlUser.userProfile);

// router.get('/forgot', function(req, res) {
//     res.redirect('/reset');
//   });



module.exports = router;
