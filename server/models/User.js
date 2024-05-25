const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Scores for different game modes
    scores: {
        trueFalseScore: { type: Number, default: 0 },
        multipleChoiceScore: { type: Number, default: 0 },
        fillBlankScore: { type: Number, default: 0 }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
