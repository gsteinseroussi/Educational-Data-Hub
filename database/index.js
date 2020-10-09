//Connect to Mongo database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tempDB').then(
  () => {
    console.log('CONNECTED TO MONGO');
  },
  (err) => {
    console.log('ERROR CONNECTING TO MONGO:', err);
  }
);

module.exports = mongoose.connection;
