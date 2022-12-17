const express = require('express');
const { getAllIA, addIA, getAIA } = require('../controllers/ia.controller');
const router = express.Router();

router.get('/', getAllIA);
router.get('/:id', getAIA);
router.post('/', addIA);

module.exports = router;