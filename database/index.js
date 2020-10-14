//Connect to Mongo database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require("dotenv").config();

console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/tempDB').then(
  () => {

    console.log('CONNECTED TO MONGO');
  },
  (err) => {
    console.log('ERROR CONNECTING TO MONGO:', err);
  }
);

module.exports = mongoose.connection;
