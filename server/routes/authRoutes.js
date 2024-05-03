const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User registration (unprotected)
router.post('/register', authController.registerUser);

// User login (unprotected)
router.post('/login', authController.loginUser);

module.exports = router;
