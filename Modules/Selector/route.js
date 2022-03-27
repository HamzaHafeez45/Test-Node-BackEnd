const express = require("express");
const selectorController = require("./controller");

const router = express();

router.get("/:id", selectorController.getSelectorById);
router.get("/", selectorController.getAllSelectors);
router.post("/", selectorController.postSelector);

module.exports = router;
