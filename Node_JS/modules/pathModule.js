const http = require("http")
const path = require("path")
const fs = require("fs")

const location = "/Users/shreykhandelwal/Desktop/Vydya-Tech/vydyatech-learn/index.html"
let packageLocation = path.join(__dirname, "../async.txt")

http.createServer((req, res) => {
    // const myPath = path.parse(location)
    // console.log(myPath)
    fs.readFile(packageLocation, "utf-8", (err, data) => {
        if(err) console.log(err)
            else console.log(data)
    })
}).listen(3008, () => {
    console.log("Server started...")
})