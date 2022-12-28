const express = require('express');
const { getAllAdmins, addAdmin, getAAdmin } = require('../controllers/admin.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get("/", authMiddleware, getAllAdmins);
router.get("/:id", authMiddleware, getAAdmin);
router.post("/", authMiddleware, addAdmin);

module.exports = router;