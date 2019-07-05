import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/events");
  },
  getBook: function(id) {
    return axios.get("/api/events/" + id);
  },
  deleteBook: function(id) {
    return axios.delete("/api/events/" + id);
  },
  saveBook: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};
