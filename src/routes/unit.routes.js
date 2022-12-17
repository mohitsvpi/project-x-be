const express = require('express');
const { getAllUnits, addUnit, getAUnit } = require('../controllers/unit.controller');
const router = express.Router();

router.get('/', getAllUnits);
router.get('/:id', getAUnit);
router.post('/', addUnit);

module.exports = router;