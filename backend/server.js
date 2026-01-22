const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");


const app = express();

connectDB();

// MIDDLEWARE (VERY IMPORTANT)
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/statutory", require("./routes/statutoryRoutes"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
