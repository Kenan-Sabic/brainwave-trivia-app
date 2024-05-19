const Player = require('../models/Player');
const User = require('../models/User');

// Get all players
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find().populate('user', 'username');
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new player
exports.createPlayer = async (req, res) => {
    const { userId, name } = req.body;

    try {
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if the player already exists for this user
        const existingPlayer = await Player.findOne({ user: userId });
        if (existingPlayer) {
            return res.status(400).json({ error: 'Player already exists for this user' });
        }

        // Create a new player
        const newPlayer = new Player({
            user: userId,
            name,
            scores: {
                trueFalseScore: 0,
                multipleChoiceScore: 0,
                fillBlankScore: 0
            }
        });

        await newPlayer.save();

        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get player by ID
exports.getPlayerById = async (req, res) => {
    const playerId = req.params.id;
    try {
        const player = await Player.findById(playerId).populate('user', 'username');
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
    const { name, trueFalseScore, multipleChoiceScore, fillBlankScore } = req.body;
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(
            playerId,
            {
                name,
                'scores.trueFalseScore': trueFalseScore,
                'scores.multipleChoiceScore': multipleChoiceScore,
                'scores.fillBlankScore': fillBlankScore
            },
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


// Update player scores
exports.updatePlayerScores = async (req, res) => {
    const playerId = req.params.id;
    const { trueFalseScore, multipleChoiceScore, fillBlankScore } = req.body;
    try {
        const player = await Player.findById(playerId);

        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }

        // Ensure the user updating the score is the owner of the player
        if (player.user.toString() !== req.user.id) {
            return res.status(403).json({ error: 'Forbidden: You are not allowed to update this player' });
        }

        // Update scores only if they are higher than the existing scores
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
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
