const jwt = require('jsonwebtoken');

//JWT token
exports.verifyToken = (req, res, next) => {
    // Get token from request headers
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }

        
        req.user = decoded.user;
        next();
    });
};