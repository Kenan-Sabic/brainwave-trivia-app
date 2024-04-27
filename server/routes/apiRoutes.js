// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

router.get('/questions/truefalse', questionsController.getTrueFalseQuestions);
router.get('/questions/multiplechoice', questionsController.getMultipleChoiceQuestions);
router.get('/questions/fillblank', questionsController.getFillBlankQuestions);

module.exports = router;
