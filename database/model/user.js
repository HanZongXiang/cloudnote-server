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
    default:'http://img2.imgtn.bdimg.com/it/u=1113213886,4225820012&fm=26&gp=0.jpg'
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