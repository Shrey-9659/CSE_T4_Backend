let text = document.getElementById("text")
let btn = document.getElementById("btn")
let temp = document.getElementById("temp")

btn.addEventListener("click", () => {
    let cityName = temp.value
    let api = `http://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${cityName}`
    fetch(api)
    .then((rawData) => {
        return rawData.json()
    })
    .then((res) => {
        text.innerText = `Temperature of ${cityName} is ${res.current.temp_c}`
    })
    .catch(err => console.log(err))
})
