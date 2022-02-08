const express = require("express");
const app = express();

//shutting down security to allow us to talk b/w fe and be
const cors = require("cors");

app.use(cors())
app.use(express.json())

//root route
app.get("/", (req,res)=> {
    res.send("Welcome to Travel App!")
})

module.exports = app