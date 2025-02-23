const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  orders: Number,
});

customerSchema.methods.incrementOrders = function() {
  this.orders += 1;
  return this.save();
};

module.exports = mongoose.model('Customer', customerSchema);
