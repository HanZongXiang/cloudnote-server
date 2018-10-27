const mongoose = require('mongoose')

const user = new mongoose.Schema({
  username:String,
  desc:String,
  email: {
    type:String,
    unique:true,
    required:true
  },
  password:String,
  avatar: {
    type:String,
    default:'http://pbl.yaojunrong.com/avatar1.jpg'
  }
},
{
  versionKey:false,
  timestamps:{
    createdAt:'createdTime',
    updatedAt:'updatedTime'
  }
})

module.exports = mongoose.model('user',user)