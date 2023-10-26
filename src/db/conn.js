const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017"

const connectToMongo =  mongoose.connect(mongoURI,{
    dbName : "portfolio",
}).then(() => console.log("Database connected")).catch((e)=> console.log(e));

module.exports = connectToMongo;