const express = require("express");
const connectDB = require("./config/db");
const statutoryRoutes = require("./routes/statutoryRoutes");

const app = express();
connectDB();

app.use(express.json());
app.use("/api/statutory", statutoryRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
