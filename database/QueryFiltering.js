const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: String,
  status: { type: String, enum: ['active', 'completed'], default: 'active' },
});

taskSchema.query.active = function() {
  return this.where({ status: 'active' });
};

module.exports = mongoose.model('Task', taskSchema);
