// controllers/userController.js

const User = require("../models/User");

exports.getAssignableUsers = async (req, res) => {
  try {
    // auth context
    const currentUserId = req.user.id; //guaranteed to be present due to authMiddleware.

    // 401 - not authenticated
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Fetch users (exclude self)
    const users = await User.find(
      { _id: { $ne: currentUserId } },
      "_id name email",
    ).sort({ name: 1 });

    // 404 - no users found
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // 200 - success
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);

    // 400 - invalid query parameters (e.g. invalid user ID format)
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid query parameters" });
    }

    // 500 - fallback
    return res.status(500).json({ message: "Server error" });
  }
};
