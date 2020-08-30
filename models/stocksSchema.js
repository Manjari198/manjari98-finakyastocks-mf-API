const mongoose = require ('mongoose');

const stocksschema = new mongoose.Schema({
    Code : String,
    CompanyName : String,
    Description : String,
    Date_of_Record : Date,
    Open : Number,
    High : Number,
    Low : Number,
    Close : Number,
    WAP : Number,
    No_of_shares : Number,
    No_of_trades : Number,
    Total_Turnover : Number,
    Deliverable_Quantity : Number,
    Perc_Deli_Qty_To_Traded_Qty : Number,
    Spread_H_L : Number,
    Spread_C_O : Number,
    
    Status : String         // Company Alive or Dead in BSE 
});

module.exports = mongoose.model('stocks',stocksschema,'StockMFDetailsBSE');