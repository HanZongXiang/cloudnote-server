const mongoose = require('mongoose')

const collection = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user'
  },
  article: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'article'
  },
  sticky_notes: String
},
{
  versionKey: false,
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})

module.exports = mongoose.model('collection',collection)