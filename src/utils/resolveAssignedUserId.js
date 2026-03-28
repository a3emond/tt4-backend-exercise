const mongoose = require("mongoose");
const User = require("../models/User");

exports.resolveAssignedUserId = async (assignedUserId) => {
  if (!assignedUserId) return null;

  if (!mongoose.Types.ObjectId.isValid(assignedUserId)) {
    throw new Error("Invalid ObjectId");
  }

  const user = await User.findById(assignedUserId);

  if (!user) {
    throw new Error("User not found");
  }

  return user._id;
};
