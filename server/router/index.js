const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const myinfoRouter = require('./myinfo');
const quizRouter = require('./quiz');
const oauthRouter = require('./oauth');
const emailRouter = require('./email');

router.use('/user', userRouter);
router.use('/myinfo', myinfoRouter);
router.use('/quiz', quizRouter);
router.use('/oauth', oauthRouter);
router.use('/email', emailRouter);

module.exports = router;
