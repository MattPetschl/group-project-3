const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const eventSeed = [
  {
    eventName: "Code the group project",
    category: "dev",
    description: "Make a cool app so we all pass",
    time: "9:00 pm",
    location: "everywere",
    date: new Date(Date.now())
  },
  {
    title: "Play guild wars",
    category: "gaming ",
    description: "play all the world bosses at server reset",
    time: "7:00 pm",
    location: "lion's arch",
    date: new Date(Date.now())
  }
];

db.Events.remove({})
  .then(() => db.Events.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
