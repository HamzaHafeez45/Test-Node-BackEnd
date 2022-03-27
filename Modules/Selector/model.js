const mongoose = require("mongoose");

const selectorSchema = new mongoose.Schema({
  selector: {
    type: String,
    required: [true, "Selector is required"],
  },
});
const Selector = mongoose.model("selector", selectorSchema);

module.exports.Selector = Selector;
module.exports.selectorSchema = selectorSchema;
