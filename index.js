require('dotenv').config();

const express = require("express");
const expressFileupload = require("express-fileupload");
const path = require('path');
const cors = require('cors');

const app = express();

// Routes
const book = require('./routes/book');

// Middleware Dependencies
app.use(cors())
app.use(express.json());
app.use(expressFileupload());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Handlers
app.use("/books", book);

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    console.clear();
    console.log("Server running on PORT: " + PORT);
});
