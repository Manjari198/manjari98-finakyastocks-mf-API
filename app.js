require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
//app.use('/', rtsIndex);
// app.use('/stock', rtsStock);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
//    res.setHeader('Access-Control-Allow-Headers', '')
    next();
});
//error handler
app.use((err, req, res, next) => {
    if (err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});


//app.listen(3000, ()=>console.log('Server started at port 3000'));



//const express=require('express');
//const bodyParser=require('body-parser');
const path=require('path');
const schedule = require ('node-schedule');

const api = require('./routes/api');

const getBSE_data = require('./routes/BSE_data');
const updateStocksWithDailyData = getBSE_data.updateStocksWithDailyData;
const getZipAndExtract = getBSE_data.getZipAndExtract;
const compareForNewCodes = getBSE_data.compareForNewCodes;
const compareForOldCodes = getBSE_data.compareForOldCodes;

const port=3000;

//const app=express();
 
app.listen(port,function(){
    console.log("Server is listening at port:" + port);
}); 


app.use(express.static(path.join(__dirname, '../dist'))); //getting acess to the dist folder

app.use(bodyParser.urlencoded({extended: true})); //parses the text as url encoded data
app.use(bodyParser.json()); //parses the text as json

//app.use('/api',api);
app.use('/', rtsIndex);

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
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