const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  articleId: mongoose.Schema.Types.ObjectId,
});

commentSchema.post('remove', function(doc) {
  console.log(`Comment with id ${doc._id} was removed`);
});

module.exports = mongoose.model('Comment', commentSchema);
