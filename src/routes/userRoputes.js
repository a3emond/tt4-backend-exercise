// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// function from the controller -> returns users with only _id, name, email fields for task assignment dropdowns
router.get("/assignable", authMiddleware, userController.getAssignableUsers); // protected route, only accessible with valid JWT token

module.exports = router;
