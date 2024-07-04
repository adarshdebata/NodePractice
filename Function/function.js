//Creating a basic function
let result = sum(2,4);
console.log(result)
function sum (num1, num2){
    return num1 + num2;
}


//Arrow Function
// result = sumArrow(3,5) -> give an error :  Cannot access 'sumArrow' before initialization
const sumArrow = (num1,num2) =>{
    return num1+num2;
}
result = sumArrow(3,5)
console.log(result)


// Random things
let text = sumArrow.toString();
console.log(text)


//function Rest Parameter 
function sum(...args){
    let sum = 0;
    for(let key of args){
        sum += key;
    }
    console.log("Sum is :  " +  sum);
}
sum (1,2,12,34,5,545,454,23432,3,34,43,4,3,3,4);

//default parameter value
const mul = (x, y=10)  =>{
    return x*y;
}
console.log(mul(5,2)); 

//argument object

function findMax(...args) {
    let max = -Infinity;
    let length = arguments.length 
    for (let i = 0; i < length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }
  let max = findMax(1,2,37,4,5,43,23,13)
  console.log(max)

  