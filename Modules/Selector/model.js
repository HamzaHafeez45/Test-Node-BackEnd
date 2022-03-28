const mongoose = require("mongoose");

const selectorSchema = new mongoose.Schema({
  label: {
    type: String,
  },
  children: [mongoose.Schema.Types.Mixed],
});
const Selector = mongoose.model("selector", selectorSchema);

module.exports.Selector = Selector;
module.exports.selectorSchema = selectorSchema;
