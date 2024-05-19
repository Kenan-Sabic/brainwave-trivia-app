const Player = require('../models/Player');

const authorizePlayer = async (req, res, next) => {
    const playerId = req.params.id;

    try {
        const player = await Player.findById(playerId);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }

        if (player.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = authorizePlayer;
