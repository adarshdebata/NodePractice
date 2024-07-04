let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`promise1 Rejected`);
    }, 2000);
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`promise2 resolved`)
    },2500)
});
Promise.race([promise1,promise2]).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(`Error : ` + error);
});

/*
-    Promise.race() is useful when you want to take action based on the first promise 
    that settles (resolves or rejects), regardless of the others.

-   To get the result from the fastest promise, 
    for example, fetching data from multiple sources and using the one that responds first.
*/