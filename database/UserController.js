const User = require('./models/User');

async function createUser() {
  const user = new User({ name: 'Alice', email: 'alice@example.com', age: 28 });
  await user.save();
  console.log('User created:', user);
}

createUser();

async function getUsers() {
  const users = await User.find({});
  console.log('All users:', users);
}

getUsers();

async function updateUser(email) {
  const user = await User.findOneAndUpdate({ email }, { age: 30 }, { new: true });
  console.log('Updated user:', user);
}

updateUser('alice@example.com');

async function deleteUser(email) {
  await User.findOneAndDelete({ email });
  console.log('User deleted with email:', email);
}

deleteUser('alice@example.com');