const express = require('express');
const router = express.Router();
const multipleChoiceController = require('../../controllers/multipleChoiceController');

router.get('/', multipleChoiceController.getAllMultipleChoiceQuestions);
router.get('/random/:count', multipleChoiceController.getRandomMultipleChoiceQuestions);
router.get('/:id', multipleChoiceController.getMultipleChoiceQuestionById);
router.post('/', multipleChoiceController.createMultipleChoiceQuestion);
router.put('/:id', multipleChoiceController.updateMultipleChoiceQuestionById);
router.delete('/:id', multipleChoiceController.deleteMultipleChoiceQuestionById);

module.exports = router;
