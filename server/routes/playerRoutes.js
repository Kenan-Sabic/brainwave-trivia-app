// routes/players/playerRoutes.js
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);
router.post('/', playerController.createPlayer);
router.put('/:id', playerController.updatePlayerById);
router.delete('/:id', playerController.deletePlayerById);

module.exports = router;
