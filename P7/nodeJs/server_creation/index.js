const http = require("http")
const PORT = 3000;

const app = http.createServer((req, res) => {
    if(req.url == "/"){
        console.log("I am on home page")
        res.write("<h1>I am on home page</h1>")
        res.end()
    }else if(req.url == "/about"){
        console.log("I am on about page")
        res.end("I am on about page")
    }else{
        console.log("I am on some other page")
        res.write("I am on other page")
        res.end()
    }
})

app.listen(PORT, () => {
    console.log("Server is running...")
})