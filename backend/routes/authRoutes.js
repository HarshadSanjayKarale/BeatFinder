// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const firebaseAdmin = require('firebase-admin');
const db = require('../db/firestore');
const signUpSchema = require('../schema/signUpSchema');
const loginSchema = require('../schema/loginSchema');

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = signUpSchema.parse(req.body);

    // Check if user already exists
    const userExists = await firebaseAdmin.auth().getUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create user
    const userRecord = await firebaseAdmin.auth().createUser({
      email,
      password
    });

    // Store user data in Firestore
    await db.collection('users').doc(userRecord.uid).set({
      email
    });

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // Authenticate user
    const userCredential = await firebaseAdmin.auth().signInWithEmailAndPassword(email, password);

    // Get user ID token
    const idToken = await userCredential.user.getIdToken();

    return res.status(200).json({ message: 'Login successful', token: idToken });
  } catch (error) {
    console.error('Error logging in user:', error);
    return res.status(400).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;
