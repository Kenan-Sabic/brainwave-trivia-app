

// Custom error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Check for specific error types and respond accordingly
    if (err.name === 'ValidationError') {
        // Validation error (e.g., duplicate user)
        return res.status(400).json({ error: err.message });
    }

    // Other types of errors
    return res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler;
