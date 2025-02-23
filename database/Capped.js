const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now },
}, { capped: { size: 1024, max: 100, autoIndexId: true } });

module.exports = mongoose.model('Log', logSchema);
