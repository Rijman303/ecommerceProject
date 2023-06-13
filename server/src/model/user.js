const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    fullName: {type:String},
    phoneNumber: {type:String}, 
    password: {type:String},
    userType: {type:String},
    cartList: [{type:String}],
    favList: [{type:String}]
  });
  const User = mongoose.model('User', userSchema);

  module.exports =User
