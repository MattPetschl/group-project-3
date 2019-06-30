var db = require("../models");

module.exports = function(app){
    //searches for all users
    app.get("/api/users", function(req, res) {
        db.user.findAll({
            
          }).then(function(dbUser) {
            res.json(dbUser);
          });
    });

    //searches for a specific user
    app.get("/api/users:email", function(req, res) {
        db.user.findOne({
            where: {
              email: req.params.email
            },
          }).then(function(dbUser) {
            res.json(dbUser);
          });
        });

    //creates a new account.
    app.post("/api/login", function(req, res) {
        db.user.create(req.body).then(function(dbUser) {
            res.json(dbUser);
          });
    });

    //deletes a specific user.
    app.delete("/api/users:email", function(req, res) {
        db.user.destroy({
            where: {
              email: req.params.email
            }
          }).then(function(dbUser) {
            res.json(dbUser);
          });
    });
}