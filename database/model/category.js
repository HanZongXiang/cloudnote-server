const mongoose = require('mongoose')
const category = new mongoose.Schema({
  name:{
    type:String,
    unique:true,
    required:true
  }
},
{
  versionKey: false,
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})

module.exports = mongoose.model('category',category)