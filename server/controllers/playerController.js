const Player = require('../models/Player');
const User = require('../models/User');

// Get all players
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find().populate('user', 'name');
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new player
exports.createPlayer = async (req, res) => {
    const { name, userId } = req.body;

    if (!name || !userId) {
        return res.status(400).json({ error: 'Name and userId are required' });
    }

    try {
        const existingPlayerByName = await Player.findOne({ name });
        if (existingPlayerByName) {
            return res.status(400).json({ error: 'Name already exists' });
        }

        const existingPlayerByUser = await Player.findOne({ user: userId });
        if (existingPlayerByUser) {
            return res.status(400).json({ error: 'User already has a player' });
        }

        const newPlayer = new Player({ name, user: userId });
        console.log('New player:', newPlayer); // Debugging log
        await newPlayer.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        console.error('Error:', error); // Debugging log
        res.status(500).json({ error: error.message });
    }
};

// Get player by ID
exports.getPlayerById = async (req, res) => {
    const playerId = req.params.id;
    try {
        const player = await Player.findById(playerId).populate('user', 'name');
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
    const { trueFalseScore, multipleChoiceScore, fillBlankScore } = req.body;

    try {
        const player = await Player.findById(playerId);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }

        // Only update scores if the new score is higher than the existing score
        if (trueFalseScore !== undefined && trueFalseScore > player.scores.trueFalseScore) {
            player.scores.trueFalseScore = trueFalseScore;
        }
        if (multipleChoiceScore !== undefined && multipleChoiceScore > player.scores.multipleChoiceScore) {
            player.scores.multipleChoiceScore = multipleChoiceScore;
        }
        if (fillBlankScore !== undefined && fillBlankScore > player.scores.fillBlankScore) {
            player.scores.fillBlankScore = fillBlankScore;
        }

        await player.save();
        res.json(player);
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
