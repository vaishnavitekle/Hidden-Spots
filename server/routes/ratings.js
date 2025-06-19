const express = require('express');
const router = express.Router();
const Rating = require('../models/rating');

// POST /api/ratings/:spotId
router.post('/:spotId', async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === '') {
      return res.status(400).json({ error: 'Review text is required.' });
    }

    const newRating = new Rating({
      spotId: req.params.spotId,
      text,
    });

    const savedRating = await newRating.save();
    res.status(201).json(savedRating);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save rating' });
  }
});

module.exports = router;
