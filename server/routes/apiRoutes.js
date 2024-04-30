// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');
const playerController = require('../controllers/playerController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

// Middleware to protect endpoints
router.use(jwtMiddleware.verifyToken);

// Protected endpoints for questions
router.get('/questions/truefalse', questionsController.getTrueFalseQuestions);
router.get('/questions/multiplechoice', questionsController.getMultipleChoiceQuestions);
router.get('/questions/fillblank', questionsController.getFillBlankQuestions);

// Protected endpoints for players
router.post('/players', playerController.createPlayer);
router.get('/players/:id', playerController.getPlayerById);
router.put('/players/:id', playerController.updatePlayerById);
router.delete('/players/:id', playerController.deletePlayerById);

module.exports = router;
