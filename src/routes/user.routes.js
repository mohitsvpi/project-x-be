const express = require('express');
const {getAllUsers, getAUser, addUser, updateUser, deleteUser} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getAUser);
router.post("/", addUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;