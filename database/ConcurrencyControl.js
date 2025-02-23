const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: String,
  content: String,
}, {
  optimisticConcurrency: true, // Mongoose will use __v to check version conflicts
});

const Document = mongoose.model('Document', documentSchema);

// Usage example demonstrating optimistic concurrency control
async function updateDocument(id, newContent) {
  try {
    const doc = await Document.findById(id);
    if (!doc) return console.log('Document not found');

    doc.content = newContent;
    await doc.save();
    console.log('Document updated successfully');
  } catch (err) {
    console.error('Failed to update due to version conflict:', err);
  }
}

module.exports = { Document, updateDocument };
