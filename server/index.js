//imports
//environmental variables like database connection string and private encryption key
require('dotenv').config();
//makes all the REST api stuff much easier
const express = require('express');
//pretty sure this one is for environmental variables in case your variables are in system PATH
const path = require('path');
//User register and login routes
const authRoutes = require('./routes/authRoutes')
//Player routes, not same as user but related in one to one relationship in database
const playerRoutes = require('./routes/playerRoutes');
//question routes
const  multipleChoiceRoutes = require('./routes/questions/multipleChoiceRoutes');
const trueFalseRoutes = require('./routes/questions/trueFalseRoutes');
const fillBlankRoutes = require('./routes/questions/fillBlankRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
//middleware to make app not crash on bad requests
const errorHandler = require('./middleware/errorHandler'); 
//library used to connect app to database
const mongoose = require('mongoose');

//application object used for pretty much everything to be put in the app
const app = express();
//encryption private key from .env file
const secretKey = process.env.JWT_SECRET;



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    bufferCommands: false, // Disable command buffering
    serverSelectionTimeoutMS: 5000, // Timeout for server selection
    socketTimeoutMS: 45000 // Timeout for socket operations
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware to parse JSON bodies
app.use(express.json());

//Authentication routes, Also known as User routes
app.use('/api/auth', authRoutes);

//Player routes
app.use('/api/players', playerRoutes);

//Questions Routes
app.use('/api/questions/truefalse', trueFalseRoutes);
app.use('/api/questions/multiplechoice', multipleChoiceRoutes);
app.use('/api/questions/fillblank', fillBlankRoutes);

//Leaderboard routes
app.use('/api/leaderboard', leaderboardRoutes);

//error handler so app doesn't crash when some idiot makes a bad request
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
