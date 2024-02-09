const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    await authService.register(email, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
        console.error(error); // Log the error to the console

    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
