var db = require("../models");

module.exports = function(app){
    //searches for all groups
    app.get("/api/groups", function(req, res) {
        db.group.findAll({
            
          }).then(function(dbGroup) {
            res.json(dbGroup);
          });
    });

    //searches for a specific group
    app.get("/api/groups:groupName", function(req, res) {
        db.group.findOne({
            where: {
              groupName: req.params.groupName
            },
          }).then(function(dbGroup) {
            res.json(dbGroup);
          });
        });

    //creates a new group.
    app.post("/api/groups", function(req, res) {
        db.group.create(req.body).then(function(dbGroup) {
            res.json(dbGroup);
          });
    });

      // PUT route for updating groups
    app.put("/api/groups:groupName", function(req, res) {
        db.group.update(req.body, {
        where: {
            groupName: req.body.groupName
        }
        }).then(function(dbGroup) {
        res.json(dbGroup);
        });
    });

    //deletes a specific group.
    app.delete("/api/groups:groupName", function(req, res) {
        db.event.destroy({
            where: {
              groupName: req.params.groupName
            }
          }).then(function(dbGroup) {
            res.json(dbGroup);
          });
    });
}