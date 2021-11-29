const express = require('express');
const router = express.Router();

const user = require('../contrellers/user');

router.post('/signin', user.signin);
router.post('/signup', user.signup);
router.post('/signout', user.signout);
router.post('/validinfo', user.validinfo);

module.exports = router;
