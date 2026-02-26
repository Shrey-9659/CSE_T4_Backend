const http = require("http")
const url = require("url")
const link = "https://www.youtube.com/watch?v=3LRZRSIh_KE&name=shrey"
const app = http.createServer((req, res) => {
    const myUrl = url.parse(link)
    console.log(myUrl.pathname)
    console.log(myUrl.query)
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})