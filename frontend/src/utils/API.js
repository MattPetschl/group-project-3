import axios from "axios";
import { API_URL } from "../config";

const xhr = axios.create({ baseURL: API_URL });

export default {
  // Gets all events
  getEvents: function() {
    return xhr.get("/api/events");
  },
  // Gets the events with the given id
  getEvent: function(id) {
    return xhr.get("/api/events/" + id);
  },
  // Deletes the events with the given id
  deleteEvent: function(id) {
    return xhr.delete("/api/events/" + id);
  },
  // Saves a book to the database
  saveEvent: function(eventData) {
    console.log(eventData);
    return xhr.post("/api/events/", eventData);
  }
};
