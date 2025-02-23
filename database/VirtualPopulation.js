const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
});

const bookSchema = new mongoose.Schema({
  title: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
});

// Virtual population for books written by an author
authorSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'authorId',
});

// Ensure virtual fields are serialized
authorSchema.set('toObject', { virtuals: true });
authorSchema.set('toJSON', { virtuals: true });

const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);

module.exports = { Author, Book };
