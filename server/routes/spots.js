const express = require('express');
const router = express.Router();
const Spot = require('../models/Spot');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });

router.post('/', upload.array('photos'), async (req, res) => {
  try {
    // Parse form data
    const { name, description, vibe, lat, lng } = req.body;
    const imageUrls = req.files.map((file) => file.path);

    // Create new spot
    const newSpot = new Spot({
      name,
      description,
      vibe,
      coordinates: {
        type: 'Point',
        coordinates: [parseFloat(lng), parseFloat(lat)],
      },
      photos: imageUrls
    });

    // Save spot
    const savedSpot = await newSpot.save();
    res.status(201).json(savedSpot);
  } catch (err) {
    console.error('Error creating spot:', err);
    res.status(500).json({ error: 'Failed to add spot' });
  }
});

module.exports = router;
