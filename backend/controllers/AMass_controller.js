var express = require("express");
var router = express.Router();
var user = require("../models/user.js");
var event = require("../models/event.js");
var group = require("../models/group.js");

//Display the homepage.
router.get("/", function(req, res) {
});

//Display the homepage of a specific user.
router.get("/users/:displayName", function(req, res) {
});

//Display all events
router.get("/events", function(req, res) {
});

//Display a specific event's page
router.get("/events/:eventID", function(req, res) {
});

//Display all groups
router.get("/groups", function(req, res) {
});

//Display a specific group's page
router.get("/groups/:groupName", function(req, res) {
});

//Create a new user
router.post("/api/users", function(req, res) {
});

//Create a new event
router.post("api/events", function(req, res) {
});

//Create a new group
router.post("api/groups", function(req, res) {
});

//Update a specific user's info
router.put("/users/:displayName", function(req, res) {
});

//Update a specific event's info
router.put("/events/:eventID", function(req, res) {
});

//Update a specific group's info
router.put("/groups/:groupName", function(req, res) {
});