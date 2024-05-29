require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const multipleChoiceRoutes = require('./routes/questions/multipleChoiceRoutes');
const trueFalseRoutes = require('./routes/questions/trueFalseRoutes');
const fillBlankRoutes = require('./routes/questions/fillBlankRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());

//encryption private key from .env file
const secretKey = process.env.JWT_SECRET;



mongoose.connect(process.env.MONGODB_URI, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
//Tell the app to use CORS so we can contact it from frontend


// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/questions/truefalse', trueFalseRoutes);
app.use('/api/questions/multiplechoice', multipleChoiceRoutes);
app.use('/api/questions/fillblank', fillBlankRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
