var db = require("../models");

module.exports = function(app){
    //searches for all events
    app.get("/api/events", function(req, res) {
        db.event.findAll({
            
          }).then(function(dbEvent) {
            res.json(dbEvent);
          });
    });

    //searches for a specific user
    app.get("/api/events:eventID", function(req, res) {
        db.user.findOne({
            where: {
              eventID: req.params.eventID
            },
          }).then(function(dbEvent) {
            res.json(dbEvent);
          });
        });

    //creates a new event.
    app.post("/api/events", function(req, res) {
        db.event.create(req.body).then(function(dbEvent) {
            res.json(dbEvent);
          });
    });

    // PUT route for updating events
  app.put("/api/events:eventID", function(req, res) {
    db.Comment.update(req.body, {
      where: {
        eventID: req.body.eventID
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

    //deletes a specific event.
    app.delete("/api/events:eventID", function(req, res) {
        db.event.destroy({
            where: {
              eventID: req.params.eventID
            }
          }).then(function(dbEvent) {
            res.json(dbEvent);
          });
    });
}