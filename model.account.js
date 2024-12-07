const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  balance: { type: Number, required: true },
  currency: { type: String, required: true },
});

module.exports = mongoose.model("Account", accountSchema);