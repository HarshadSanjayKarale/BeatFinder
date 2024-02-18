const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { signupSchema, loginSchema } = require('../schema/validationSchema');
const User = require('../schema/user');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    // Validate request body
    const { username, email, password } = signupSchema.parse(req.body);

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.errors });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    // Validate request body
    const { email, password } = loginSchema.parse(req.body);

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.errors });
  }
});

module.exports = router;
