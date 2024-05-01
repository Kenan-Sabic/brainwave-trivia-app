const mongoose = require('mongoose');

const fillBlankSchema = new mongoose.Schema({
    text: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    // Other fields as needed
});

module.exports = mongoose.model('FillBlankQuestion', fillBlankSchema);
