let didMarksScored = false;
// Promise created
let newPromise = new Promise((resolve, reject) => {
    if(didMarksScored){
        console.log("I scored 9+ CGPA")
        resolve("Shrey")
    }else{
        console.log("I did not scored 9+ CGPA")
        reject()
    }
});

newPromise
.then((data) => {
    console.log("Promise is resolved")
    console.log(data)
})
.catch(() => {
    console.log("Promise is rejected")
})
.finally(() =>{
    console.log("I will run all the time")
})


