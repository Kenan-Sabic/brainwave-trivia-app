const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  gameMode: { type: String, enum: ['true_false', 'multiple_choice', 'fill_blank'], required: true },
  score: { type: Number, required: true },
  // Other fields as needed
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
