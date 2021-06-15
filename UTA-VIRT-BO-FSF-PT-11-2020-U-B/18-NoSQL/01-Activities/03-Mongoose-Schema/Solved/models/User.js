const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is Required'
  },

  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    minlength: 6
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/]
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = model('User', UserSchema);

module.exports = User;
