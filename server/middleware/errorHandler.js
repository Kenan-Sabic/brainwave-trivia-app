const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    
    if (err.name === 'ValidationError') {
        // Validation error (e.g., duplicate user)
        return res.status(400).json({ error: err.message });
    }

    
    return res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler;
