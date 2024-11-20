const express = require("express");
const { createUser, getUserById } = require("../controllers/userController");

const router = express.Router();

// POST /api/users - Create a new user
router.post("/", createUser);

// GET /api/users/:id - Retrieve user details
router.get("/:id", getUserById);

module.exports = router;
