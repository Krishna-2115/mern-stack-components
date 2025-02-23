const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  item: String,
  quantity: Number,
});

inventorySchema.statics.findByItem = function(itemName) {
  return this.findOne({ item: itemName });
};

module.exports = mongoose.model('Inventory', inventorySchema);
