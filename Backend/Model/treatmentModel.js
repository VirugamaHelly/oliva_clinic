const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  Title: {
    type: String,
    required: true
  },
  Small_description: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Treatment = mongoose.model("Treatment", treatmentSchema);
module.exports = Treatment;
