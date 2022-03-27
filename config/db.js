require("dotenv").config();

const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
};

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_URL, connectionParams)
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
};

module.exports = connectDB;
