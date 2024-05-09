const mongoose = require('mongoose');

const multipleChoiceSchema = new mongoose.Schema({
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
    // Other fields as needed
});

module.exports = mongoose.model('MultipleChoiceQuestion', multipleChoiceSchema);
