const { getAllSelectors } = require("./service");

//get all selectors
exports.getAllSelectors = async (req, res) => {
  const result = await getAllSelectors();
  return res.status(200).send(result);
};
