const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =  Schema({
    'id'          : String,
    'username'    : String,
    'clientId'    : String,
    'clientName'  : String,
    'password'    : String,
    'userTypeId'  : Number,
    'userType'    : String
});

module.exports = userSchema; 