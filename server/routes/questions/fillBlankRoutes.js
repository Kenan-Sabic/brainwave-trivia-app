const express = require('express');
const router = express.Router();
const fillBlankController = require('../../controllers/fillBlankController')

router.get('/', fillBlankController.getAllFillBlankQuestions);
router.get('/random/:count', fillBlankController.getRandomFillBlankQuestions);
router.get('/:id', fillBlankController.getFillBlankQuestionById);
router.post('/', fillBlankController.createFillBlankQuestion);
router.put('/:id', fillBlankController.updateFillBlankQuestionById);
router.delete('/:id', fillBlankController.deleteFillBlankQuestionById);

module.exports = router;
