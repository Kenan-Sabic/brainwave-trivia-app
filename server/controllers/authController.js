const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Assuming you have a User model

// User registration
exports.registerUser = async (req, res) => {
    // Extract user data from request body
    const { username, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, password: hashedPassword });

    // Save user to database
    await newUser.save();

    res.json({ message: 'User registered successfully' });
};

// User login
exports.loginUser = async (req, res) => {
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
    const token = jwt.sign({ user: { id: user._id, username: user.username } }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
};
