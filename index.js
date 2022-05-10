const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const PostHandlerController = require("./Controller/PostHandlerController");

var app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World Sollarium API");
});

app.listen(PORT, function() {
    console.log(`Sollarium API server listening at: localhost:${PORT}`);
});

postHandlerController = new PostHandlerController(app);
