const { Selector } = require("./model");

// //get selector by id
exports.getSelectorByID = async (id) => {
  return await Selector.findById(id);
};

//get all selectors
exports.getAllSelectors = async () => {
  return await Selector.find();
};

//check selector exists or not
exports.checkIfSelectorExist = async (selector) => {
  return await Selector.findOne({ selector: selector });
};

//post selector
exports.addSelector = async (data) => {
  try {
    selector = new Selector(data);
    return await selector.save();
  } catch (error) {
    throw error;
  }
};
