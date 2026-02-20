const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    // Sync way of writing in a file
    fs.writeFileSync("example.txt", "I am written with the help of fs module")
    // Async way of writing in a file
    fs.writeFile("async.txt", "I am async code", (err, data) => {
        if(err) console.log("Error in writing in a file")
            else console.log("Data written successfully")
    })
    if(req.url == "/"){
        console.log("Home page")
        res.write("I am on home page")
        res.end()
    }else if(req.url == "/contact"){
        console.log("Contact page")
        res.write("I am on contact page")
        res.end()
    }else{
        console.log("Page not found..")
        res.end("<h1>Page not found</h1>")
    }
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})