const http = require("http")
const fs = require("fs")
const app = http.createServer((req, res) => {
    // console.log(req.url)
    if(req.url === "/"){
        res.end("<h1>This is home page</h1>")
    }else if(req.url === "/about"){
        fs.readFile("index.html", "utf-8", (err, data) => {
            if(err) console.log(err)
                else res.end(data)
        })
    }else if(req.url === "/style.css"){
        fs.readFile("style.css", "utf-8", (err, data) => {
            if(err) console.log(err)
                else res.end(data)
        })
    }
})

app.listen(3000, () => {
    console.log("Server started...")
})