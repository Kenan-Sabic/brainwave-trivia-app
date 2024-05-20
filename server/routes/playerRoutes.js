const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const verifyToken = require('../middleware/jwtMiddleware').verifyToken;
const authorizePlayer = require('../middleware/playerAuthorizationMiddleware');

// Get all players
router.get('/', verifyToken, playerController.getAllPlayers);

// Create a new player
router.post('/', verifyToken, playerController.createPlayer);

// Get player by ID
router.get('/:id', verifyToken, playerController.getPlayerById);

// Update player by ID
router.put('/:id', verifyToken, authorizePlayer, playerController.updatePlayerById);

// Delete player by ID
router.delete('/:id', verifyToken, authorizePlayer, playerController.deletePlayerById);



module.exports = router;
