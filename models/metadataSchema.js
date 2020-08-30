const mongoose = require ('mongoose');

const metadataschema = new mongoose.Schema({
    Code : String,
    CompanyName : String,
    Description : String,
    Refreshed_At : Date,
    From_Date : Date,
    To_Date : Date,
    
    Status : String
});

module.exports = mongoose.model('initialMetadata',metadataschema,'MetadataBSE'); 