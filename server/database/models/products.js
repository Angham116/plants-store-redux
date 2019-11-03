const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number
  },
  image: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('product', ProductSchema)

