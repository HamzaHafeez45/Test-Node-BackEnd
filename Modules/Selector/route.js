const express = require("express");
const selectorController = require("./controller");

const router = express();

router.get("/", selectorController.getAllSelectors);

module.exports = router;
