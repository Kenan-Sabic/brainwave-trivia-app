const User = require('../models/User');

const authorizeUser = async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user._id.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = authorizeUser;
