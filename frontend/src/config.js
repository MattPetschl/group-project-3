export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://amass.us/api"
    : "http://localhost:8080/";
