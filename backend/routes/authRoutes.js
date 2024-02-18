// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const firebaseAdmin = require('firebase-admin');
const db = require('../db/firestore');
const signUpSchema = require('../schema/signUpSchema');
const loginSchema = require('../schema/loginSchema');

router.post('/signup', async (req, res) => {
  // Handle sign up logic
});

router.post('/login', async (req, res) => {
  // Handle login logic
});

module.exports = router;
