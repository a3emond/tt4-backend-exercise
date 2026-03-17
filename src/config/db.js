const mongoose = require("mongoose");

mongoose.set("strictQuery", true); // ignore typos and unknown fields in queries

const connectDB = async () => {
  try {
    const connectionString = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongo:27017/${process.env.MONGO_DB}?authSource=admin`;

    await mongoose.connect(connectionString);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
