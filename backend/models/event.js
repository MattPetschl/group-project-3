var orm = require("../config/orm.js");

var event = {
    all: function(cb) {
      console.log("ormall");
      orm.all("events", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("events", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("events", objColVals, condition, function(res) {
        cb(res);
      });
    }
};
  

module.exports = event;