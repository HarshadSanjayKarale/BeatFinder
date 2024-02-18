const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../secret/firebaseConfig.js');

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
});

const db = firebaseAdmin.firestore();

module.exports = db;

