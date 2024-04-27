// controllers/questionsController.js
const path = require('path');
const fs = require('fs');

// Function to read questions from JSON file
function readQuestionsFromFile(fileName) {
    const filePath = path.join(__dirname, '..', 'data', fileName);
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}

// Get true/false questions
exports.getTrueFalseQuestions = (req, res) => {
    const trueFalseQuestions = readQuestionsFromFile('truefalse.json');
    res.json(trueFalseQuestions);
};

// Get multiple-choice questions
exports.getMultipleChoiceQuestions = (req, res) => {
    const multipleChoiceQuestions = readQuestionsFromFile('multiplechoice.json');
    res.json(multipleChoiceQuestions);
};

// Get fill-in-the-blank questions
exports.getFillBlankQuestions = (req, res) => {
    const fillBlankQuestions = readQuestionsFromFile('fillblank.json');
    res.json(fillBlankQuestions);
};
