let btn = document.getElementById("btn")
let text = document.getElementById("text")
let api = "https://api.quotable.io/random"

btn.addEventListener("click", () => {
    fetch(api)
    .then((rawData) => {
        return rawData.json()
    })
    .then((res) => {
        text.innerText = res.content
    })
    .catch((err) => console.log(err))
})
