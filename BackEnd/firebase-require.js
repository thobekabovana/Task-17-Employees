const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "employees-app-153d4.appspot.com"  // Updated storage bucket
});

// Firestore and Storage instances
const db = admin.firestore();        // Firestore database instance
const bucket = admin.storage().bucket(); // Firebase Storage instance

// Exporting the initialized services
module.exports = { admin, db, bucket };

