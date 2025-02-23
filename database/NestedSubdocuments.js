const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  postedAt: { type: Date, default: Date.now },
});

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [commentSchema],
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
