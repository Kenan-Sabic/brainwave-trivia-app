// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');
const playerController = require('../controllers/playerController')

router.get('/questions/truefalse', questionsController.getTrueFalseQuestions);
router.get('/questions/multiplechoice', questionsController.getMultipleChoiceQuestions);
router.get('/questions/fillblank', questionsController.getFillBlankQuestions);


// Create a new player
router.post('/players', playerController.createPlayer);

// Get player by ID
router.get('/players/:id', playerController.getPlayerById);

// Update player by ID
router.put('/players/:id', playerController.updatePlayerById);

// Delete player by ID
router.delete('/players/:id', playerController.deletePlayerById);

module.exports = router;
