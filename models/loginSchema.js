const mongoose = require ('mongoose');

const loginschema = new mongoose.Schema({
    name : String,
    emailID : String,
    password : String
});

module.exports = mongoose.model('login',loginschema,'LoginDetails');