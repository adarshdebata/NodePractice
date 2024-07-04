const addition = function(a,b){
    return new Promise (function(resolve,reject){
        if (typeof a == "number" &&  typeof b == "number"){
            resolve(a+b);
        }else{
            reject("Not a number");
        }
    });
}
addition(3, 2)
.then(function (response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});