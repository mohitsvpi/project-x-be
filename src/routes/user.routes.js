const express = require('express');
const {getAllUsers, getAUser, addUser, updateUser, deleteUser} = require("../controllers/user.controller");
const { authMiddleware, isAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get("/", authMiddleware, isAdmin, getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getAUser);
router.post("/", authMiddleware, isAdmin, addUser);
router.patch("/:id", authMiddleware, isAdmin, updateUser);
router.delete("/:id", authMiddleware, isAdmin, deleteUser);

module.exports = router;