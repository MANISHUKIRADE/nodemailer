const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userTypeSchema =  Schema({
    'id'         : String,
    'userType'   : String,
});

module.exports = userTypeSchema;