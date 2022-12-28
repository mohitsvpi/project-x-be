const express = require('express');
const { getAllIA, addIA, getAIA } = require('../controllers/ia.controller');
const { authMiddleware, isAdmin } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/', authMiddleware, isAdmin, getAllIA);
router.get('/:id', authMiddleware, isAdmin, getAIA);
router.post('/',authMiddleware, isAdmin, addIA);

module.exports = router;