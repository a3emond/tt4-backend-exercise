const express = require('express');
const register = require('../controllers/authController').register;
const login = require('../controllers/authController').login;

const router = express.Router();

router.post('/register', register); 

router.post('/login', login);

module.exports = router;