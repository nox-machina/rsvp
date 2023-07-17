//connect to database
const mongoose = require("mongoose");

const connectDB = async () => {
  let connection = null;
  try {
    if (connection && connection.readyState === 1) {
      return connection;
    }
    connection = await mongoose.connect(process.env.DBURL);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
    return connection;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
