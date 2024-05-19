const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Assuming you have a User model

// User registration
exports.registerUser = async (req, res) => {
    try {
        // Extract user data from request body
        const { username, password } = req.body;

        // Check if the username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already taken' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ username, password: hashedPassword });

        // Save user to database
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ user: { id: newUser._id, username: newUser.username } }, process.env.JWT_SECRET, { expiresIn: '48h' });

        // Return token and user ID
        res.status(201).json({ token, userId: newUser._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// User login
exports.loginUser = async (req, res) => {
    try {
        // Extract user data from request body
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });

        // Check if user exists
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Validate password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ user: { id: user._id, username: user.username } }, process.env.JWT_SECRET, { expiresIn: '48h' });

        // Return token and user ID
        res.json({ token, userId: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
