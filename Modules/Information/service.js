const { Information } = require("./model");

//get information by id
exports.getInformationByID = async (id) => {
  return await Information.findById(id);
};

//get all informations
exports.getAllInformations = async () => {
  return await Information.find().populate({
    path: "selector",
    select: "selector -_id",
  });
};

//post information
exports.addInformation = async (data) => {
  information = new Information(data);
  return await information.save();
};

//update the Information
exports.updateInformationByID = async (id, data) => {
  const result = await Information.findByIdAndUpdate(id, {
    $set: {
      name: data.name,
      selector: data.selector,
      agreement: data.agreement,
    },
    new: true,
  });
  return result;
};
