const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  end_year: { type: String, require: true },
  intensity: { type: Number, require: true },
  sector: { type: String, require: true },
  topic: { type: String, require: true },
  insight: { type: String, require: true },
  url: { type: String, require: true },
  region: { type: String, require: true },
  start_year: { type: String, require: true },
  impact: { type: String, require: true },
  added: { type: String, require: true },
  published: { type: String, require: true },
  country: { type: String, require: true },
  relevance: { type: Number, require: true },
  pestle: { type: String, require: true },
  source: { type: String, require: true },
  title: { type: String, require: true },
  likelihood: { type: Number, require: true },
});

const dataModel = mongoose.model("datamodels", dataSchema);
module.exports = dataModel;
