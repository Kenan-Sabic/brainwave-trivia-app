const mongoose = require('mongoose');

const multipleChoiceSchema = new mongoose.Schema({
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
    
});

module.exports = mongoose.model('MultipleChoiceQuestion', multipleChoiceSchema);
