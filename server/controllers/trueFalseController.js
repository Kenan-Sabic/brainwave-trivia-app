const TrueFalseQuestion = require('../models/TrueFalseQuestion');
//library for easier array operations we use it to get random questions from the database
const _ = require('lodash');

// Get a specified number of random true/false questions
exports.getRandomTrueFalseQuestions = async (req, res) => {
    try {
        const questions = await TrueFalseQuestion.find();
        const randomQuestions = _.sampleSize(questions, req.params.count);
        res.status(200).json(randomQuestions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new true/false question
exports.createTrueFalseQuestion = async (req, res) => {
    try {
        const question = await TrueFalseQuestion.create(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all true/false questions
exports.getAllTrueFalseQuestions = async (req, res) => {
    try {
        const questions = await TrueFalseQuestion.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single true/false question by ID
exports.getTrueFalseQuestionById = async (req, res) => {
    try {
        const question = await TrueFalseQuestion.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a true/false question by ID
exports.updateTrueFalseQuestionById = async (req, res) => {
    try {
        const question = await TrueFalseQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a true/false question by ID
exports.deleteTrueFalseQuestionById = async (req, res) => {
    try {
        const question = await TrueFalseQuestion.findByIdAndDelete(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};