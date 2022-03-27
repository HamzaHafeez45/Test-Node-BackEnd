const {
  addInformation,
  getAllInformations,
  getInformationByID,
  updateInformationByID,
} = require("./service");

//get information by id
exports.getInformationById = async (req, res) => {
  try {
    const result = await getInformationByID(req.params.id);
    return res.status(200).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

//get all informations
exports.getAllInformations = async (req, res) => {
  const result = await getAllInformations();
  return res.status(200).send(result);
};

//post information
exports.postInformation = async (req, res) => {
  const result = await addInformation(req.body);
  return res.status(200).send(result);
};

//update information
exports.updateInformationById = async (req, res) => {
  try {
    const result = await updateInformationByID(req.params.id, req.body);
    return res.send(`The Information ${result} Has Been Updated Successfully`);
  } catch (error) {
    res.send(error.message);
  }
};
