const mongoose = require('mongoose');
const ratings= new mongoose.Schema({
  spotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
});

ratings.index({coordinates:'2dsphere'});
module.exports = mongoose.model('Rating', ratings);