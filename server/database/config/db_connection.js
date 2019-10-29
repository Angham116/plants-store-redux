const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_DB_URL;
// console.log(55, MONGO_URL);

if(!MONGO_URL){
  console.log('No MONGO_URL found');
}

// Event listeners on Mongoose connection object

// mongoose connected
mongoose.connection.on('connected', () => {
  console.log(66666666666);
  console.log('Connected Successfuly');
})

// mongoose disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Disconnected');
})

// if there is an error connedtion
mongoose.connection.on('error', (err) => {
  console.log(`Error on connection ${err}`);
})

// close all mongoose connections when app is terminated
process.on('SIGCONT', () => {
  mongoose.connection.close(() => {
    console.log('All mongoose connections is closed because app is terminated');
  })
})

const connectMongoose = () => mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

module.exports = connectMongoose;