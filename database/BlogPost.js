const mongoose = require('mongoose');

const embeddedCommentSchema = new mongoose.Schema({
  text: String,
  author: String,
  postedAt: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [embeddedCommentSchema],
});

module.exports = mongoose.model('Blog', blogSchema);
