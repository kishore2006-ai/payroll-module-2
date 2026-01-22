const mongoose = require("mongoose");

const statutoryRuleSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  taxSlabs: [
    {
      minIncome: Number,
      maxIncome: Number,
      taxPercentage: Number
    }
  ],
  pfPercentage: {
    type: Number,
    required: true
  },
  esiPercentage: {
    type: Number,
    required: true
  },
  professionalTax: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("StatutoryRule", statutoryRuleSchema);
