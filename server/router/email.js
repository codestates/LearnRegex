const express = require('express');
const router = express.Router();

const email = require('../controllers/email');

router.post('/verify', email.verifyEmail);
router.post('/resetpassword', email.resetPassword);

module.exports = router;
