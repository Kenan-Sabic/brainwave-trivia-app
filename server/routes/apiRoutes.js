// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

router.get('/questions', questionsController.getQuestions);

module.exports = router;
