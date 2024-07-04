let promise1 = new Promise((resolve, reject) => {
    resolve(2);
});
let promise2 = new Promise((resolve, reject) => {
    reject(300);
});

Promise.all([promise1,promise2])
    .then ((result) => {
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });