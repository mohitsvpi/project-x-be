const express = require('express');
const { getAllPP, addPP, getAPP } = require('../controllers/pair_programming.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/', authMiddleware, getAllPP);
router.get('/:id', authMiddleware, getAPP);
router.post('/', authMiddleware, addPP);

module.exports = router;