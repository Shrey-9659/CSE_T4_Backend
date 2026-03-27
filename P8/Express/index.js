const express = require("express")
const path = require("path")

// Relative Location
const aboutFileLocation = path.join(__dirname, "index.html")

const app = express()

// Creating routes
// serverName.methodName("/route", callbackFunction)
app.get("/", (req,res) => {
    res.send("Welcome to the Home Page")
})
app.get("/about", (req, res) => {
    // res.sendFile("/Users/shreykhandelwal/Desktop/Shoolini/Sem 2/AI_T4/P8/Express/index.html")
    res.sendFile(aboutFileLocation)
})
app.get("/users", (req, res) => {
    res.json({
        name : "Shrey",
        univ : "Shoolini",
        year : 2026
    })
})

// Creating APIs
const users = require("./users.json")

app.get("/api/users", (req, res) => {
    res.json(users)
})

// Dynamic Routing
app.get("/api/users/:id", (req, res) => {
    const reqId = parseInt(req.params.id)
    const providedUser = users.find((user) => {
        return user.id === reqId
    })
    res.json(providedUser)
})

app.listen(3000, () => {
    console.log("Server started...")
})