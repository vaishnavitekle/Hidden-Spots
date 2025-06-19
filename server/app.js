const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const spotRoutes = require('./routes/spots');
const ratingRoutes = require('./routes/ratings');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/spots', spotRoutes);
app.use('/api/ratings',ratingRoutes);
// Connect to MongoDB and start server
mongoose
  .connect("mongodb+srv://vaishnavitekale999:Vaishu%401234@cluster0.wkvytg3.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });
