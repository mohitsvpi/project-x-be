const express = require('express');
const {getAllUsers, getAUser, addUser, updateUser, deleteUser} = require("../controllers/user.controller");
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getAUser);
router.post("/", authMiddleware, addUser);
router.patch("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;