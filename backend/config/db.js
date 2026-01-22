const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://libraryuser:kishore678906789067890@cluster0.qmtlzyk.mongodb.net/payrollDB?retryWrites=true&w=majority"
    );
    console.log("MongoDB Atlas Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
