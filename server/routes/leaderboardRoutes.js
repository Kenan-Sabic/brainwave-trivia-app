const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// Get top players by score for True/False questions
router.get('/true-false', leaderboardController.getTopTrueFalsePlayers);

router.get('/fillBlank',leaderboardController.getTopFillBlankPlayers );

router.get('/multiple-choice' , leaderboardController.getTopMultipleChoicePlayers);

module.exports = router;
