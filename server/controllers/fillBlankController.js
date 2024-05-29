const FillBlankQuestion = require('../models/FillBlankQuestion');

const _ = require('lodash');


exports.getRandomFillBlankQuestions = async (req, res) => {
    try {
        const count = parseInt(req.params.count, 10);
        if (isNaN(count)) {
            return res.status(400).json({ error: 'Invalid count parameter' });
        }
        const questions = await FillBlankQuestion.find();
        const randomQuestions = _.sampleSize(questions, count);
        res.status(200).json(randomQuestions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createFillBlankQuestion = async (req, res) => {
    try {
        const question = await FillBlankQuestion.create(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAllFillBlankQuestions = async (req, res) => {
    try {
        const questions = await FillBlankQuestion.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getFillBlankQuestionById = async (req, res) => {
    try {
        const question = await FillBlankQuestion.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateFillBlankQuestionById = async (req, res) => {
    try {
        const question = await FillBlankQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteFillBlankQuestionById = async (req, res) => {
    try {
        const question = await FillBlankQuestion.findByIdAndDelete(req.params.id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};