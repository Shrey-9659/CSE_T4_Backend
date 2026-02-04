// setTimeout(function, timeInMS)

// setTimeout(function(){}, 3000)
// setTimeout(() => {}, 3000)

console.log("first")
setTimeout(() => {
    console.log("I will run after 1 seconds...")
}, 1000)
let secondTimer = setTimeout(() => {
    console.log("I will run after 2 seconds...")
}, 2000) 
setTimeout(() => {
    console.log("I will run after 3 seconds...")
}, 3000)
console.log("third")

// clearTimeout(reference)
clearTimeout(secondTimer)