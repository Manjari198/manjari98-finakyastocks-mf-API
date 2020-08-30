const mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost:27017/MEANStackDB", (err) => {
mongoose.connect("mongodb+srv://prerana98:Technocrats@cluster0.ipjoo.gcp.mongodb.net/FinakyaStocks?retryWrites=true&w=majority", (err) => {   
    if (!err) 
        console.log("MongoDB connection succeeded.");
    else 
        console.log("Error in MongoDB connection: " + JSON.stringify(err,undefined,2));
});

require("./user.model");
// require('./customer.model');
// require('./mutual-advisor.model');
// require('./stock.model');

