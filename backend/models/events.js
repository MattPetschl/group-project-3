const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  time: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
