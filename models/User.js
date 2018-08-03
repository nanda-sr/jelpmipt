const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PassportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  username: String, 
  email: String, 
  address: String
}, {
  timestamps: {
    createdAt: "created_at", 
    updatedAt: "updated_at"
  }
});

userSchema.plugin(PassportLocalMongoose, {usernameField: 'email'});

module.exports = mongoose.model('User', userSchema);