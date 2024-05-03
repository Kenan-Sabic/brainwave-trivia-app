// controllers/playerController.js
const Player = require('../models/Player');



// Get all players
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new player
exports.createPlayer = async (req, res) => {
    const { username } = req.body;
    try {
        const existingPlayer = await Player.findOne({ username });
        if (existingPlayer) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        const newPlayer = await Player.create({ username });
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get player by ID
exports.getPlayerById = async (req, res) => {
    const playerId = req.params.id;
    try {
        const player = await Player.findById(playerId);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update player by ID
exports.updatePlayerById = async (req, res) => {
    const playerId = req.params.id;
    const { username, trueFalseScore, multipleChoiceScore, fillBlankScore } = req.body;
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(
            playerId,
            { username, 'scores.trueFalseScore': trueFalseScore, 'scores.multipleChoiceScore': multipleChoiceScore, 'scores.fillBlankScore': fillBlankScore },
            { new: true }
        );
        if (!updatedPlayer) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.json(updatedPlayer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete player by ID
exports.deletePlayerById = async (req, res) => {
    const playerId = req.params.id;
    try {
        const deletedPlayer = await Player.findByIdAndDelete(playerId);
        if (!deletedPlayer) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
