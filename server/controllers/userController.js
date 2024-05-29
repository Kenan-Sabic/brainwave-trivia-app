const User = require('../models/User');

// Get user by ID
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user scores by ID
exports.updateUserScoresById = async (req, res) => {
    const userId = req.params.id;
    const { trueFalseScore, multipleChoiceScore, fillBlankScore } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        
        if (trueFalseScore !== undefined && trueFalseScore > user.scores.trueFalseScore) {
            user.scores.trueFalseScore = trueFalseScore;
        }
        if (multipleChoiceScore !== undefined && multipleChoiceScore > user.scores.multipleChoiceScore) {
            user.scores.multipleChoiceScore = multipleChoiceScore;
        }
        if (fillBlankScore !== undefined && fillBlankScore > user.scores.fillBlankScore) {
            user.scores.fillBlankScore = fillBlankScore;
        }

        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete user by ID
exports.deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
