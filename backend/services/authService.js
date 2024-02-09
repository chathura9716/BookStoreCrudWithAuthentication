const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function register(email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Error registering user');
  }
}
async function login(email, password) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log('User not found');
        throw new Error('User not found');
      }
  
      console.log('Retrieved user:', user);
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log(password,user.password);
      if (!passwordMatch) {
        console.log('Invalid password');
        throw new Error('Invalid password');
      }
  
      const token = jwt.sign({ email: user.email }, 'secretKey');
      console.log('Login successful');
      return token;
    } catch (error) {
      console.error('Error logging in:', error.message);
      throw new Error('Error logging in');
    }
  }
  
module.exports = { register, login };
