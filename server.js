// Import required modules
const express = require("express");
const path = require("path");

// Create an Express application
const app = express();

// Define a route for the root URL
app.get("/", (request, response) => {
  // Serve the index.html file
  response.sendFile(path.join(__dirname, "index.html"));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
