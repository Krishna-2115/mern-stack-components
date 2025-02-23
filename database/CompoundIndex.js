const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
});

eventSchema.index({ date: 1, location: 1 });

module.exports = mongoose.model('Event', eventSchema);
