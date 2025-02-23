const mongoose = require('mongoose');
const Sale = require('./models/Sale'); // assume Sale model exists

async function getSalesSummary() {
  const summary = await Sale.aggregate([
    { $group: { _id: '$product', totalSales: { $sum: '$amount' } } },
    { $sort: { totalSales: -1 } },
  ]);
  console.log('Sales Summary:', summary);
}

getSalesSummary();
