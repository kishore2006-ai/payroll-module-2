// 🔹 LOAD ENV VARIABLES FIRST (VERY IMPORTANT)
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const statutoryRoutes = require("./routes/statutoryRoutes");

const app = express();

// 🔹 CONNECT TO MONGODB ATLAS
connectDB();

// 🔹 MIDDLEWARE
app.use(cors());
app.use(express.json());

// 🔹 ROUTES
app.use("/api/statutory", statutoryRoutes);

// 🔹 PORT (LOCAL + DEPLOYMENT SAFE)
const PORT = process.env.PORT || 5000;

// 🔹 START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
