const http = require("http")
const PORT = 3030

const app = http.createServer((req, res) => {
    console.log("Server running on port 3030")
});

app.listen(PORT, () => {
    console.log("Server successfully running....")
})