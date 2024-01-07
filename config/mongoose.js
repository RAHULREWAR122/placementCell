const mongoose = require('mongoose');
const env = require('./environment');
// connect with database
mongoose.connect(process.env.mongo_connect_db,{ useNewUrlParser: true, useUnifiedTopology: true });

const db =  mongoose.connection;
// if in connect any error
db.on('error' , console.error.bind('error inconnect db'));

// if connection success
db.once('open' ,()=>{
    console.log("mongoDB connected Successfully");

})


module.exports = db;
