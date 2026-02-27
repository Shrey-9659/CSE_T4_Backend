const http = require("http")
const url = require("url")
const PORT = 3000
const app = http.createServer((req, res) => {
    
    // let myUrl = "https://www.youtube.com/watch?v=dnJ6i1Y6IGM"
    let myUrl = req.url
    let parsedUrl = url.parse(myUrl, true)
    // console.log(parsedUrl.pathname)
    console.log(parsedUrl)
    console.log(parsedUrl.query.name)
    if(parsedUrl.pathname == "/submit"){
        // res.end("Submitted " + parsedUrl.query.name)
        res.end(`Submitted ${parsedUrl.query.name}`)
    }
})

app.listen(PORT, () => {
    console.log("Server started...")
})