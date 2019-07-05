const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  creator: { type: String, required: true },
  synopsis: String,
  location: String,
  date: { type: Date, default: Date.now }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
