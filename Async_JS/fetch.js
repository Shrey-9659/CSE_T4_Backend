let api = "https://jsonplaceholder.typicode.com/users"

// fetch(api)
// .then(rawData => rawData.json())
// .then(response => console.log(response))

fetch(api)
.then((data) => {
    return data.json();
})
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})

// fetch(api)
// .then(rawData => rawData.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))