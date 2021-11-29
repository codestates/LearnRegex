const express = require('express');
const router = express.Router();

const myinfo = require('../contrellers/myinfo');

router.get('/', myinfo.getmyinfo);
router.patch('/', myinfo.editmyinfo);
router.delete('/', myinfo.deletemyinfo);

module.exports = router;
