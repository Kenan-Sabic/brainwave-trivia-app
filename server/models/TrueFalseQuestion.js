const mongoose = require('mongoose');

const trueFalseSchema = new mongoose.Schema({
    text: { type: String, required: true },
    correctAnswer: { type: Boolean, required: true },
    // Other fields as needed
});

module.exports = mongoose.model('TrueFalseQuestion', trueFalseSchema);
