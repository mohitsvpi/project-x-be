const express = require('express');
const { getAllPP, addPP, getAPP } = require('../controllers/pair_programming.controller');
const router = express.Router();

router.get('/', getAllPP);
router.get('/:id', getAPP);
router.post('/', addPP);

module.exports = router;