const admin = require('firebase-admin'); // Import Firebase Admin SDK
const serviceAccount = require('./couplecode-35a9e-firebase-adminsdk-fbsvc-3a1e7408e4.json'); // Import the service account JSON file

// Initialize Firebase Admin SDK with the service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require('express');
const cors = require('cors');
const notificationRoutes = require('./routes/notifications');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', notificationRoutes);
app.get("/", (req, res) => {
  res.send("Couple Code Api is Working");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Notification service running on port ${PORT}`);
});
