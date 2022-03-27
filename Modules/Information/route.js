const express = require("express");
const informationController = require("./controller");

const router = express();

router.get("/:id", informationController.getInformationById);
router.get("/", informationController.getAllInformations);
router.post("/", informationController.postInformation);
router.put("/:id", informationController.updateInformationById);

module.exports = router;
