let text = document.getElementById("text")
let change = document.getElementById("change")
let dont = document.getElementById("dont")
let timer;

change.addEventListener("click", () => {
    timer = setTimeout(() => {
        text.innerText = "Text is changed"
    }, 3000)
})

dont.addEventListener("click", () => {
    clearTimeout(timer)
})