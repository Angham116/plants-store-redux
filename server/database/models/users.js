const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  role: {
    type: String
  },
  location: {
    type: String,
    required: true,
    trim: true
  }

}) 

module.exports = mongoose.model('users', UserSchema);

