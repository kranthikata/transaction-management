require("dotenv").config();
const express = require("express");
const transactionRoutes = require("./routes/transactionRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db"); // Import the connectDB function

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/transactions", transactionRoutes);
app.use("/api/users", userRoutes);

// MongoDB Connection
connectDB();

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
