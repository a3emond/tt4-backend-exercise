const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

// core
router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);

// filtered
router.get("/mine", taskController.getMyTasks);
router.get("/assigned", taskController.getAssignedTasks);

// mutations (owner only enforced in controller)
router.patch("/:id", taskController.updateTask);
router.patch("/:id/assign", taskController.assignTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
