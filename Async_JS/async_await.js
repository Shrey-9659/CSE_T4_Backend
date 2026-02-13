// fetch(api)
// .then((data) => {
//     return data.json();
// })
// .then((response) => {
//     console.log(response)
// })

// let fetchData = async () => {
//   let rawData = await fetch(api)
//   let data = await rawData.json()
//     console.log(data)
// };
let api = "https://jsonpqwertyulaceholder.typicode.com/users"
let fetchData = async () => {
  try{
    let rawData = await fetch(api)
    let data = await rawData.json()
    console.log(data)
  }catch(error){
    console.log("error aa gaya")
  }

};
fetchData();
