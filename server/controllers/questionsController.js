// controllers/questionsController.js
const questions = [
    // Placeholder questions data
];

exports.getTrueFalseQuestions = (req, res) => {
    // Logic to filter true/false questions
    const trueFalseQuestions = questions.filter(question => question.type === 'true_false');
    res.json(trueFalseQuestions);
};

exports.getMultipleChoiceQuestions = (req, res) => {
    // Logic to filter multiple-choice questions
    const multipleChoiceQuestions = questions.filter(question => question.type === 'multiple_choice');
    res.json(multipleChoiceQuestions);
};

exports.getFillBlankQuestions = (req, res) => {
    // Logic to filter fill-in-the-blank questions
    const fillBlankQuestions = questions.filter(question => question.type === 'fill_blank');
    res.json(fillBlankQuestions);
};
