const express = require('express');
const {getAllBatches, getABatch, addBatch, updateBatch, deleteBatch} = require("../controllers/batch.controller");
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get("/", authMiddleware, getAllBatches);
router.get("/:id", authMiddleware, getABatch);
router.post("/", authMiddleware, addBatch);
router.patch("/:id", authMiddleware, updateBatch);
router.delete("/:id", authMiddleware, deleteBatch);

module.exports = router;