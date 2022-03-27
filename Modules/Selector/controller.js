const {
  addSelector,
  getAllSelectors,
  checkIfSelectorExist,
} = require("./service");

//get selector by id
exports.getSelectorById = async (req, res) => {
  try {
    const result = await getSelectorByID(req.params.id);
    return res.status(200).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

//get all selectors
exports.getAllSelectors = async (req, res) => {
  const result = await getAllSelectors();
  return res.status(200).send(result);
};

//post subject
exports.postSelector = async (req, res) => {
  if (await checkIfSelectorExist(req.body.name)) {
    return res.status(400).send("Selector Already Available");
  }
  const result = await addSelector(req.body);
  return res.status(200).send(result);
};
