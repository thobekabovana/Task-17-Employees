const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // Use service account if needed
  });
} else {
  admin.app(); // If already initialized, use the default app
}

module.exports = admin;


