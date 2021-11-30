const express = require('express');
const router = express.Router();
const { isAuth } = require('../controllers/authfunction');

const quiz = require('../controllers/quiz');

router.get('/', quiz.getquizs);
router.get('/info', quiz.getquiz);
router.post('/', isAuth, quiz.addquiz);
router.post('/clear', quiz.clearquiz);
router.patch('/', isAuth, quiz.editquiz);
router.delete('/', isAuth, quiz.deletequiz);

module.exports = router;
