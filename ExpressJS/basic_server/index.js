const express = require("express")
const path = require("path")
const users = require("./users.json")
const aboutFileLocation = path.join(__dirname, "index.html")
const app = express()

// serverName.methodName("/route", callbackFunction)
app.get("/", (req, res) => {
    res.send("This is my home page")
})
app.get("/about", (req, res) => {
    res.sendFile(aboutFileLocation)
})
app.get("/users", (req, res) => {
    res.json({
        name : "Shrey",
        location : "Jaipur",
        university : "Shoolini",
        year : 2026,
        isActive : false
    })
})
// Creating Sample API
app.get("/api/users", (req, res) => {
    res.json(users)
})
app.listen(3000, () => {
    console.log("Server started...")
})