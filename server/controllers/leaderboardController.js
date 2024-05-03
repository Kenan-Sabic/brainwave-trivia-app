const Player = require('../models/Player');

// Get top players by score for True/False questions
exports.getTopTrueFalsePlayers = async (req, res) => {
    try {
        const players = await Player.find().sort({ 'scores.trueFalseScore': -1 }).limit(10);
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getTopMultipleChoicePlayers = async (req, res) => {
    try {
        const players = await Player.find().sort({ 'scores.multipleChoiceScore': -1 }).limit(10);
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTopFillBlankPlayers = async (req, res) => {
    try {
        const players = await Player.find().sort({ 'scores.fillBlankScore': -1 }).limit(10);
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
