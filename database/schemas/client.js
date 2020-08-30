const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema =  Schema({
    'id'     : String,
    'name'   : String,
    'status' : String,
    'plan'   : String,
    'users'  : Array
});

module.exports = clientSchema;