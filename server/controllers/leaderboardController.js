const User = require('../models/User');


exports.getTopTrueFalsePlayers = async (req, res) => {
    try {
        const players = await User.find().sort({ 'scores.trueFalseScore': -1 }).limit(10).select('username scores.trueFalseScore');
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getTopMultipleChoicePlayers = async (req, res) => {
    try {
        const players = await User.find().sort({ 'scores.multipleChoiceScore': -1 }).limit(10).select('username scores.multipleChoiceScore');
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getTopFillBlankPlayers = async (req, res) => {
    try {
        const players = await User.find().sort({ 'scores.fillBlankScore': -1 }).limit(10).select('username scores.fillBlankScore');
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
