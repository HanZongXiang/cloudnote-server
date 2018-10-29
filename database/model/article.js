const mongoose = require('mongoose');
const Schema = mongoose.Schema

const article = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  content:String,
  contentText:String,
  author: {
    type:Schema.Types.ObjectId,
    ref:'user'
  },
  category: {
    type:Schema.Types.ObjectId,
    ref:'category'
  },
  comment: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'comment'
    }
  ],
  readnums: {
    type:Number,
    default:0
  },
  replynums: {
    type:Number,
    default:0
  }
},
{
  versionKey:false,
  timestamps:{
    createdAt:'createdTime',
    updatedAt:'updatedTime'
  }
})

module.exports = mongoose.model('article',article)