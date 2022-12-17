const express = require('express');
const {getAllBatches, getABatch, addBatch, updateBatch, deleteBatch} = require("../controllers/batch.controller");

const router = express.Router();

router.get("/", getAllBatches);
router.get("/:id", getABatch);
router.post("/", addBatch);
router.patch("/:id", updateBatch);
router.delete("/:id", deleteBatch);

module.exports = router;