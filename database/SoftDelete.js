const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  deleted: { type: Boolean, default: false },
});

itemSchema.methods.softDelete = function() {
  this.deleted = true;
  return this.save();
};

module.exports = mongoose.model('Item', itemSchema);
