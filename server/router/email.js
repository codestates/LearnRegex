const express = require('express');
const router = express.Router();
const { isAuth } = require('../controllers/authfunction');

const email = require('../controllers/email');

router.post('/', email.verifyEmail);

module.exports = router;
