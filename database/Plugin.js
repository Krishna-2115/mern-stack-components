const mongoose = require('mongoose');

// Simple plugin to add a "createdAt" timestamp if not present
function createdAtPlugin(schema, options) {
  schema.add({ createdAt: { type: Date, default: Date.now } });
  schema.pre('save', function(next) {
    if (!this.createdAt) {
      this.createdAt = Date.now();
    }
    next();
  });
}

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: Number,
});

// Apply the plugin to add a createdAt field
reviewSchema.plugin(createdAtPlugin);

module.exports = mongoose.model('Review', reviewSchema);
