require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const selector = require("./Modules/Selector/route");
const information = require("./Modules/Information/route");

const PORT = 3000;
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).send("Welcome to api");
});

app.use("/api/selector", selector);
app.use("/api/information", information);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
