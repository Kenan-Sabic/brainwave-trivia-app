const express = require('express');
const router = express.Router();
const trueFalseController = require('../../controllers/trueFalseController');

router.get('/', trueFalseController.getAllTrueFalseQuestions);
router.get('/random/:count',trueFalseController.getRandomTrueFalseQuestions);
router.get('/:id', trueFalseController.getTrueFalseQuestionById);
router.post('/', trueFalseController.createTrueFalseQuestion);
router.put('/:id',trueFalseController.updateTrueFalseQuestionById);
router.delete('/:id', trueFalseController.deleteTrueFalseQuestionById);

module.exports = router;