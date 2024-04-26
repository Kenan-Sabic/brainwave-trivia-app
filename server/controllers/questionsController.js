// controllers/questionsController.js
const questions = [
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'Who wrote Hamlet?', answer: 'William Shakespeare' },
    // Add more questions here
];

exports.getQuestions = (req, res) => {
    res.json(questions);
};
