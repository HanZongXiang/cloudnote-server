const mongoose = require('mongoose')

const comment = new mongoose.Schema({
  content: String,
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user'
  },
  article: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'article'
  }
},
{
  versionKey: false,
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})

module.exports = mongoose.model('comment', comment)