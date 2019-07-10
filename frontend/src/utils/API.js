import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets the events with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the events with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a book to the database
  saveEvent: function(eventData) {
    console.log(eventData);
    return axios.post("/api/events/", eventData);
  }
};
