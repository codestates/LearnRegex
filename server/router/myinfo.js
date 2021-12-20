const express = require('express');
const router = express.Router();
const { isAuth } = require('../controllers/authfunction');

const myinfo = require('../controllers/myinfo');

router.get('/', isAuth, myinfo.getmyinfo);
router.patch('/', isAuth, myinfo.editmyinfo);
router.patch('/password', isAuth, myinfo.editpassword);
router.post('/', myinfo.findpassword);
router.delete('/', isAuth, myinfo.deletemyinfo);

module.exports = router;
