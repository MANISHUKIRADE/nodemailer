const mongoose = require('mongoose');
const logger = require('../loggerServices/logger');
module.exports = async function(){
    let client;
    try {
        client = await mongoose.connect('mongodb+srv://mailerv1:Manish9797@cluster0.t8xnq.mongodb.net/nodemailer?retryWrites=true&w=majority',{useNewUrlParser: true});
     logger.info('Connecting to Database');   
    }catch(error){
     logger.error('Error [connection:] error while connecting to database',error);
    }
    return client;
};
