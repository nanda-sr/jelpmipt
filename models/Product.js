const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String, 
  price: String,
  detail: String,
  photo_url: String
}, {
  timestamps: {
    createdAt: "created_at", 
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Product', productSchema);