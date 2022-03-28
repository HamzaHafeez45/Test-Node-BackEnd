const mongoose = require("mongoose");

const informationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  selector: {
    type: String,
  },
  agreement: {
    type: Boolean,
    default: false,
  },
});

const Information = mongoose.model("information", informationSchema);

module.exports.Information = Information;
module.exports.informationSchema = informationSchema;
