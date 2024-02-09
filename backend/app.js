require("dotenv").config();
const express = require("express");
const app = express();

const bookRoute = require("./routes/booksRoutes");
const authRoute = require("./routes/authRoutes"); // Add the auth route

const cors = require("cors");

require("./connection/connection.js");

app.use(express.json());
app.use(cors());

app.use("/api/v1/books", bookRoute); // Adjust the book route path
app.use("/api/v1/auth", authRoute); // Add the auth route

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
