let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`Promise 1`);
    },2000);
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise2`);
    },2500);
});
Promise.any([promise1, promise2]).then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log( `Error :  `+error);
});