const mongoose = require('mongoose');

const fillBlankSchema = new mongoose.Schema({
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
});

module.exports = mongoose.model('FillBlankQuestion', fillBlankSchema);
