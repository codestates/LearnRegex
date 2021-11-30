const express = require('express');
const router = express.Router();
const { isAuth } = require('../controllers/authfunction');

const user = require('../controllers/user');

router.post('/signin', user.signin);
router.post('/signup', user.signup);
router.post('/signout', isAuth, user.signout);
router.post('/validinfo', isAuth, user.validinfo);

module.exports = router;
