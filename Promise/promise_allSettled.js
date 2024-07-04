let promise1 = new Promise((resolve, reject) => {
  resolve(`resloved`);
});
let promise2 = new Promise((resolve, reject) => {
  reject(`Error`);
});
Promise.allSettled([promise1, promise2]).then((results) => {
  console.log(results);
});
//what to do it goes to catch block
//        promise.allsettled block never goes to the catch block as it deal with the both;


// let promise1 = new Promise((resolve, reject) => {
//     if (Math.random<0.20){
//         resolve(`success`)
//     }else{
//         reject(`Fucking Failure`)
//     }
// });
// let promise2 = new Promise((resolve, reject) => {
//     if (Math.random<0.50){
//         resolve(`success`)
//     }else{
//         reject(`Fucking Failure`)
//     }
// });
// Promise.allSettled([promise1, promise2]).then((results) => {
//     console.log(results);
//   });
  