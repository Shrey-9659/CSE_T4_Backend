let api = "https://jsonplaceholder.typicode.com/users";

// fetch(api)
// .then((data) => {
//     return data.json();
// })
// .then((response) => {
//     console.log(response)
// })
// .catch((error) => {
//     console.log(error)
// })
let fetchData = async () => {
    try{
        let rawData = await fetch(api)
        let response = await rawData.json()
        console.log(response)
    }catch(error){
        console.log(error)
    }
};
fetchData();
