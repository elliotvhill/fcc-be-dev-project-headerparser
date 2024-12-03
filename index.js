require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so API is remotely testable by fCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Serve static files in Express
// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// Basic routing
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Hello API endpoint
app.get("/api/hello", (req, res) => {
    res.json({ greeting: "hello API" });
});

// whoami endpoint
app.get("/api/whoami", (req, res) => {
    res.json({
        ipaddress: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"],
    });
});

// Listen for requests
const listener = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
