const mongoose = require("mongoose");
const db = require("../backend/models");

// seed the events collection with this initial data
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
    eventName: "Play guild wars",
    category: "gaming ",
    description: "play all the world bosses at server reset",
    time: "7:00 pm",
    location: "lion's arch",
    date: new Date(Date.now())
  }
];

// when the mongo-mongoose connection is ready, call this function
function main() {
  console.log("running seed script :)");
  db.Events.remove({})
    .then(() => {
      console.info("inserting seeds");
      return db.Events.insertMany(eventSeed);
    })
    .then(data => {
      console.info("inserted seeds");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

// connection to the mongo instance and then run main when ready
mongoose.connect(
  /* TODO: add conditional logic to toggle between local development and production */
  "mongodb://localhost/amass",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  },
  () => {
    main();
  }
);
