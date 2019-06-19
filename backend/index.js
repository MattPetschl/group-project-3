const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (_, res) => {
    res.json({
        project: "group project 3 backend",
        time: Date.now()
    })
})

app.listen(3000, () => console.log("server is running :)"));