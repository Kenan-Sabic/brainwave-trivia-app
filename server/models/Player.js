const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    // Add fields for scores of different game modes
    scores: {
        trueFalseScore: { type: Number, default: 0 },
        multipleChoiceScore: { type: Number, default: 0 },
        fillBlankScore: { type: Number, default: 0 }
    }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
