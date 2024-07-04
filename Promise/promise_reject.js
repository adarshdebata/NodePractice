// Promise.reject returns a promise that is rejected with a given reason.
let promise = Promise.reject(`Error`);

Promise.catch((error)=>{//to catch error
    console.log(error);
})

// ------------------------------or-------------------------------------------

// promise