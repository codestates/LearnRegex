const express = require('express');
const router = express.Router();

const oauth = require('../controllers/oauth');

router.post('/google', oauth.oauthGoogle);
router.post('/kakao', oauth.oauthKakao);
router.post('/github', oauth.oauthGithub);

module.exports = router;
