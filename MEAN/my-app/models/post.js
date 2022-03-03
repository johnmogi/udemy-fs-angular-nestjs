const mongoose = require('mongoose')
const { stringify } = require('querystring')

const postSchema = new mongoose.Schema({
  title:{type:String, required:true},
  content:{type:String, default:'hi'},
})

module.exports = mongoose.model('Post', postSchema);

