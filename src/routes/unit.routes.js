const express = require('express');
const { getAllUnits, addUnit, getAUnit } = require('../controllers/unit.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/', authMiddleware, getAllUnits);
router.get('/:id',authMiddleware, getAUnit);
router.post('/',authMiddleware, addUnit);

module.exports = router;