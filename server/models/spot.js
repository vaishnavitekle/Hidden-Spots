const mongoose = require('mongoose');
const Rating = require('./rating'); // assuming the Rating model is in rating.js

const spotSchema = new mongoose.Schema({
  name: String,
  description: String,
  vibe: String, // Romantic, Serene, Creative
  coordinates: {
    type: { type: String, default: 'Point' },
    coordinates: [Number], // [longitude, latitude]
  },
  photos: [String],
  ratings: {
    vibe: Number,
    safety: Number,
    uniqueness: Number,
    crowd: Number,
  },
  comments: [
    {
      text: String,
      isAnonymous: Boolean,
    },
  ],
});

spotSchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Spot', spotSchema);