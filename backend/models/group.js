var orm = require("../config/orm.js");

var group = {
    all: function(cb) {
      console.log("ormall");
      orm.all("groups", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("groups", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("groups", objColVals, condition, function(res) {
        cb(res);
      });
    }
};
  

module.exports = group;