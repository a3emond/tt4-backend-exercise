const express = require("express");

const app = express();

app.use(express.json());

// route mounting
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("<h1>TT4 Backend</h1><br><p>Welcome to the TT4 Backend API!</p>");
});

module.exports = app;
