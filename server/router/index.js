const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const myinfoRouter = require('./myinfo');
const quizRouter = require('./quiz');

router.use('/user', userRouter);
router.use('/myinfo', myinfoRouter);
router.use('/quiz', quizRouter);

module.exports = router;
