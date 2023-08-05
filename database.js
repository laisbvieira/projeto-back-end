const mongoose = require("mongoose");
require("dotenv").config();

async function connectDatabase() {
  try {
    console.log("database connection initializing");

    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connection sucessful");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDatabase;
