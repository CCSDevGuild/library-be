const express = require("express");

const app = express();

// Routes
const book = require('./routes/book');

// Middleware Dependencies
app.use(express.json());

// Handlers
app.use("/books", book);

app.listen(8080, async () => {
    console.clear();
    console.log("Server running on PORT " + 8080);
});
