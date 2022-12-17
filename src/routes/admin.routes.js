const express = require('express');
const { getAllAdmins, addAdmin, getAAdmin } = require('../controllers/admin.controller');

const router = express.Router();

router.get("/", getAllAdmins);
router.get("/:id", getAAdmin);
router.post("/", addAdmin);

module.exports = router;