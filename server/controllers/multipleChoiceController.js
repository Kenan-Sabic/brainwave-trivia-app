const MultipleChoiceQuestion = require('../models/MultipleChoiceQuestion');
//library for easier array operations we use it to get random questions from the database
const _ = require('lodash');



exports.getRandomMultipleChoiceQuestions = async (req, res) => {
    try {
        const count = parseInt(req.params.count, 10); //same thing with the tf, needed it to be integer not string 
        if (isNaN(count)) {
            return res.status(400).json({ error: 'Invalid count parameter' });
        }
        const questions = await MultipleChoiceQuestion.find();
        const randomQuestions = _.sampleSize(questions, count);
        res.status(200).json(randomQuestions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new multiple choice question
exports.createMultipleChoiceQuestion = async (req, res) => {
    try {
        const question = await MultipleChoiceQuestion.create(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all multiple choice questions
exports.getAllMultipleChoiceQuestions = async (req, res) => {
    try {
        const questions = await MultipleChoiceQuestion.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single multiple choice question by ID
exports.getMultipleChoiceQuestionById = async (req, res) => {
    try {
        const question = await MultipleChoiceQuestion.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a multiple choice question by ID
exports.updateMultipleChoiceQuestionById = async (req, res) => {
    try {
        const question = await MultipleChoiceQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a multiple choice question by ID
exports.deleteMultipleChoiceQuestionById = async (req, res) => {
    try {
        const question = await MultipleChoiceQuestion.findByIdAndDelete(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};