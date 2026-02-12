let btn = document.getElementById("btn")
let quote = document.getElementById("quote")

btn.addEventListener("click", () => {
    fetch("https://api.quotable.io/random")
    .then((rawData) => {
        return rawData.json()
    })
    .then((data) => {
        quote.innerText = data.content
    })
    .catch((error) => {
        console.log(error)
    })
})
