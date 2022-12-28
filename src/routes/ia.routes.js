const express = require('express');
const { getAllIA, addIA, getAIA } = require('../controllers/ia.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/', authMiddleware, getAllIA);
router.get('/:id', authMiddleware, getAIA);
router.post('/',authMiddleware,  addIA);

module.exports = router;