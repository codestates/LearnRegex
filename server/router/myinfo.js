const express = require('express');
const router = express.Router();
const { isAuth } = require('../controllers/authfunction');

const myinfo = require('../controllers/myinfo');

router.get('/', isAuth, myinfo.getmyinfo);
router.patch('/', isAuth, myinfo.editmyinfo);
router.delete('/', isAuth, myinfo.deletemyinfo);

module.exports = router;
