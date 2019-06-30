var path = require("path");

module.exports = function(app) {
    //directs the user to the homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
    //This page shows up when the user is successfully logged in.
    app.get("/loggedin", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index2.html"));
      });
    
    //directs the user to the account creation page.
    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    //directs the user to the login page.
    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    //directs the user to the event creation page
    app.get("/createEvent", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/createEvent.html"));
    });

    //directs to user to a event page.
    app.get("/eventPage", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/eventPage.html"));
    });
}

//index, index2, signup, login, createEvent, eventPage, 
//accountSettings