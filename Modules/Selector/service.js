const { Selector } = require("./model");

//get all selectors
exports.getAllSelectors = async () => {
  return await Selector.find();
};
