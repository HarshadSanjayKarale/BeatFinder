const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../secret/firebaseConfig.js');

// Initialize Firebase Admin SDK
const db = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
}).firestore();

module.exports = db;
