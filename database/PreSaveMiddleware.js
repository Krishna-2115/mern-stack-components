const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  slug: String,
});

articleSchema.pre('save', function (next) {
  this.slug = this.title.toLowerCase().replace(/ /g, '-');
  next();
});

module.exports = mongoose.model('Article', articleSchema);
