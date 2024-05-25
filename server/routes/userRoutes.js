const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwtMiddleware = require('../middleware/jwtMiddleware');
const authorizeUser = require('../middleware/authorizeUser');

// User routes
router.get('/:id', jwtMiddleware.verifyToken, authorizeUser, userController.getUserById);
router.put('/:id', jwtMiddleware.verifyToken, authorizeUser, userController.updateUserScoresById);
router.delete('/:id', jwtMiddleware.verifyToken, authorizeUser, userController.deleteUserById);

module.exports = router;
