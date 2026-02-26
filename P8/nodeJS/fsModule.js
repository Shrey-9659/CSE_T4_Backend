const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    // console.log(fs)

    // Writing in a file - Sync
    // fs.writeFileSync("example.txt", "Writing in a file - Sync Way")

    // Writing in a file - Async
    // fs.writeFile("example.txt", "Writing in a file - Async Way", (error, data) => {
    //     if(error) console.log(error)
    //         else console.log("File writing successfull...")
    // })

    // Reading a file - Sync
    // const readData = fs.readFileSync("example.txt", "utf8")
    // console.log("Sync" + readData)

    // Reading a file - Async
    // fs.readFile("example.txt", "utf-8", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Async" + data)
    // })

    // Appending in a file - Sync
    // fs.appendFileSync("example.txt", "Appending in a file - Sync")

    // Appending in a file - Async
    // fs.appendFile("example.txt", "Appending in a file - Async Way", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Data appended...")
    // })

    // Copying a file - Sync
    // fs.cpSync("example.txt", "copyFile.txt")

    // Deleting a file - Async
    // fs.unlink("copyFile.txt", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Deleting successful...")
    // })

    // Stats of a file
    // const statData = fs.statSync("example.txt")
    // console.log(statData)
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})