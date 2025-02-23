const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: { type: Number, min: [1, 'At least one product is required'] },
});

module.exports = mongoose.model('Order', orderSchema);
