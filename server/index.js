require('dotenv').config();
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes')
const app = express();
const mongoose = require('mongoose');
const secretKey = process.env.JWT_SECRET;



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {

})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware to parse JSON bodies
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

app.use('/auth', authRoutes);

// Serve static files for the web app
//app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route for serving the React app
//app.get('*', (req, res) => {
 //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
//}); 

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
