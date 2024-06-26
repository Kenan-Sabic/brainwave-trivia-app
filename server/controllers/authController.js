const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); 


exports.registerUser = async (req, res) => {
    try {
        
        const { username, password } = req.body;

        
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already taken' });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = new User({ username, password: hashedPassword });

      
        await newUser.save();

       
        const token = jwt.sign({ user: { id: newUser._id, username: newUser.username } }, process.env.JWT_SECRET, { expiresIn: '48h' });

        // Return token and user ID
        res.status(201).json({ token, userId: newUser._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


exports.loginUser = async (req, res) => {
    try {
        
        const { username, password } = req.body;

        
        const user = await User.findOne({ username });

        
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

       
        const token = jwt.sign({ user: { id: user._id, username: user.username } }, process.env.JWT_SECRET, { expiresIn: '48h' });

        
        res.json({ token, userId: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
