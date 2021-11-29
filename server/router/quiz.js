const express = require('express');
const router = express.Router();

const quiz = require('../contrellers/quiz');

router.get('/', quiz.getquizs);
router.get('/info', quiz.getquiz);
router.post('/', quiz.addquiz);
router.post('/clear', quiz.clearquiz);
router.patch('/', quiz.editquiz);
router.delete('/', quiz.deletequiz);

module.exports = router;
