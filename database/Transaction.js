const mongoose = require('mongoose');
const User = require('./models/User');
const Order = require('./models/Order');

async function performTransaction() {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const user = await User.findOneAndUpdate({ email: 'bob@example.com' }, { $inc: { balance: -50 } }, { session });
    const order = new Order({ product: 'Book', quantity: 1 });
    await order.save({ session });
    await session.commitTransaction();
    console.log('Transaction committed');
  } catch (error) {
    await session.abortTransaction();
    console.error('Transaction aborted:', error);
  } finally {
    session.endSession();
  }
}

performTransaction();
