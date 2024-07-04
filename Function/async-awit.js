// async function f() {
//   console.log('Async function.');
//   return Promise.resolve(1);
// }

// f().then(function(result) {
//   console.log(result)
// });


// Async Function with Await
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
// *****************************************************
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//                 resolve('resolved');
//                 reject('rejected');
//              }, 2000);
//     });
//     let result = await myPromise;
//     console.log(result);
//   }
  
//   myDisplay();
  

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
  resolve('Promise resolved')}, 4000); 
});
async function asyncFunc() {
  let result = await promise; 

  console.log(result);
  console.log('hello');
}
asyncFunc();