const Task = require("../models/Task");
const { resolveAssignedUserId } = require("../utils/resolveAssignedUserId");

// POST /tasks
exports.createTask = async (req, res) => {
  try {
    const { title, description, done, priority, assignedUserId } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    let resolvedAssignedUserId = null;

    try {
      resolvedAssignedUserId = await resolveAssignedUserId(assignedUserId);
    } catch {
      return res.status(400).json({ message: "Invalid assignedUserId" });
    }

    const task = await Task.create({
      title,
      description,
      done,
      priority,
      userId: req.user.id,
      assignedUserId: resolvedAssignedUserId,
    });

    return res.status(201).json(task);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// GET /tasks (owned OR assigned)
exports.getTasks = async (req, res) => {
  try {
    const userId = req.user.id;

    const tasks = await Task.find({
      $or: [{ userId }, { assignedUserId: userId }],
    }).sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// GET /tasks/mine (owned only)
exports.getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// GET /tasks/assigned (assigned to me)
exports.getAssignedTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      assignedUserId: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// PATCH /tasks/:id (owner only)
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // ownership check
    if (task.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    Object.assign(task, req.body);

    await task.save();

    return res.status(200).json(task);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid task id" });
    }

    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// PATCH /tasks/:id/assign (owner only)
exports.assignTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { assignedUserId } = req.body;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // ownership check
    if (task.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    let resolvedAssignedUserId;

    try {
      resolvedAssignedUserId = await resolveAssignedUserId(assignedUserId);
    } catch {
      return res.status(400).json({ message: "Invalid assignedUserId" });
    }

    task.assignedUserId = resolvedAssignedUserId;

    await task.save();

    return res.status(200).json(task);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid task id" });
    }

    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// DELETE /tasks/:id (owner only)
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // ownership check
    if (task.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await task.deleteOne();

    return res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid task id" });
    }

    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
