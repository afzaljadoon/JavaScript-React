// const largestNumber = (arr1) => {
//     let maxNum = arr1[0];       
//       for (let i = 0; i < arr1.length; i++) {   
//                   if( arr1[i] > maxNum ) {                                                                       
//        maxNum = arr1[i];  

//         }                                                             }
//           return maxNum;                                                                   
//           }                                                       
//              console.log(largestNumber([12, 34, 544, 345, 243, 452, 243, 534, 456, 543, 643])) 


//  const isPalindrome = (str) => {
//         return str === str.split("").reverse().join("");
//  }
//  console.log(isPalindrome("racecar"));

//  const isPalindrome = (str) => {
//         let len = str.length;
//         for (let i = 0; i < len/2; i++) {
//             if(str[i] !== str[len -1 -i]){
//                 return false;
//             }
//         }
//         return true;
//  }

//  console.log(isPalindrome("racecar"))
//  console.log(isPalindrome("afzal"))

//Finding the first repeated number in the array with help of method
// const repeatNumber = (arr) => {
//     let seen = new Set();
//     for (let num of arr) {
//         if (seen.has(num)){
//             return num;
//         }
//           seen.add(num)
//     }
//     return null;
// }

// console.log(repeatNumber([1,2,4,6,7,4,6,5,4,3]))

//Finding repeated the first repeated element in the array with custom logic
// const repeatNumber = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1 + i; j < arr.length; j++) {
//             if(arr[i] === arr[j]){
//                 return arr[i];
//             }
//         }
//     }
//     return null;
// }
// console.log(repeatNumber([34,54,35,23,12,54,24,43,32,43,34]))

// const score = 400;
// console.log(score)

// const number = new Number(100)
// console.log(number)

// console.log(number.toString().length)
// console.log(number.toFixed(2))

// const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(5))

// const hundreds = 1000000;

// console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++++++ Maths ++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.1)) 
// console.log(Math.floor(4.9))

// console.log(Math.min(3,4,6,2,7,1))
// console.log(Math.max(10, 4, 5, 6,33 ))

// console.log(Math.random())
// console.log(Math.round(Math.random() * 10) + 1) 


// const min = 10;
// const max = 20; 

// console.log(Math.round(Math.random() * (max - min + 1)) + min)

// Closure in js
// const outerFunction = () => {
//     let outerVariable = "I'm Outer";
//     const innerFunction = () => {
//         let innerVariable = "I'm Inner"
//         console.log(outerVariable);
//         console.log(innerVariable)
//     }
//     return innerFunction;
// }
// let closure = outerFunction();
//  closure();


//this keyword in constructor function

// function Person(name) {
//     this.name = name;
//   }
  
//   const person = new Person('Bob');
//   console.log(person.name);  

//Finding the largest number in an array
// const largestNumber = () => {
//     const numbers = [1, 23, 43, 54, 64, 5, 3, 75];
//  let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++ ){
//     if(numbers[i] > largest) {
//         largest = numbers[i];
//     }
//     }
// return largest;
// }
// console.log(largestNumber());

//Finding the largest number in an array with getting the array from users
// const largestNumber = (arr) => {
    
//  let largest = arr[0];
//     for (let i = 0; i < arr.length; i++ ){
//     if(arr[i] > largest) {
//         largest = arr[i];
//     }
//     }
// return largest;
// }
// console.log(largestNumber([1, 23, 43, 54, 64, 5, 3, 75]));

//Finding the largest number with Math.max()

// const largestNumber = () => {
//     const numbers = [1, 23, 43, 54, 64, 5, 3, 75];
//     let largest = Math.max(...numbers);

//     return largest;
// }

// console.log(largestNumber())

//Finding the largest number with Math.max() getting the array from users

// const largestNumber = (arr) => {

//     let largest = Math.max(...arr);

//     return largest;
// }

// console.log(largestNumber([1, 23, 43, 54, 64, 5, 3, 75]))

//FInding the largest number with the help of reduce method
 
// const largestNumber = () => {
//     const numbers = [1, 23, 43, 54, 64, 5, 3, 75];

//     let largest = numbers.reduce((num, acc) => num > acc ? num : acc);
//     return largest;
// }

// console.log(largestNumber())

//FInding the largest number with the help of reduce method getting the input array from users
 
// const largestNumber = (arr) => {

//     let largest = arr.reduce((num, acc) => num > acc ? num : acc);
//     return largest;
// }

// console.log(largestNumber([1, 23, 43, 54, 64, 5, 3, 75]))

//Find largest number using .sort() method
//  const largestNumber = () => {
//     const numbers = [1, 23, 43, 54, 64, 5, 3, 75];
//     return numbers.sort((a, b) => b - a)[0];
    
//  }

//  console.log(largestNumber())

//Find largest number using .sort() method getting the input array from the users
//  const largestNumber = (arr) => {
//     return arr.sort((a, b) => b - a)[0];
    
//  }

//  console.log(largestNumber([1, 23, 43, 54, 64, 5, 3, 75]));

//Creating a new function that combines multiple functions into one with loop method
// function compose(functions) {
     
//     if (functions.length === 0){
//         return function(x){
//             return x;
//         }
//     }

//     return function (x) {
//         let result = x;

//         for (let i = functions.length - 1; i >= 0; i--){

//             result = functions[i](result);


//         }
//         return result;
//     }
// }  
// const functions = [
//     (x) => x + 3,
//     (x) => x * 2,
//     (x) => x + 1,
// ]
//  const composed = compose(functions);

//  console.log(composed(5))
//  console.log(composed(10))
//  console.log(composed(12))

 //Creating a new function that combines multiple functions into one with reduceRight method
//  function compose(functions) {
//     return function (x) {
//        return functions.reduceRight((result, fn) => fn(result), x)
//     }
//  }
 
//  const functions = [
//     (x) => x + 3,
//     (x) => x + 2,
//     (x) => x + 1,
//  ]

//  const compsed = compose(functions);
//  console.log(compsed(5))


 //Creating a new function that combines multiple functions into one with Recursive method
//  function compose(functions) {
    
//     return function (x) {
//         if(functions.length === 0) return x


//         const lastFunction = functions[functions.length - 1];

//         const remainingFunction = functions.slice(0, -1);

//         const result = compose(remainingFunction)(x);

//         return result;


//     }
//  }

//  const functions = [
//     (x) => x + 1,
//     (x) => x * 2,
//     (x) => x - 3,
//  ]

//  const composed = compose(functions);

//  console.log(composed(5))


 //Creating a new function that combines multiple functions into one with reduce method
// IDENTIFY FUNCTION: those function which doesn't change the input
//COMPOSED FUNCTION: it is the function which is created by combining multiple functions, where output of one function becomes the input of the next function

//  function compose(functions) {
//     return function(x){
//         return functions.reverse().reduce((result, fn) => fn(result), x)
//     }
//  }

// const functions = [
//     (x) => x + 1,
//     (x) => x * 2,
//     (x) => x - 3,
// ]

// const composed = compose(functions);

// console.log(composed(5))

//Creating a function which give us the length of an array with the help of loop
//  const lengthOfArray = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         if(arr.length === 0){
//             return false;
//         } else {
//             return arr.length;
//         }
//     }
//  }

// console.log(lengthOfArray([5, 6, 49, 65, "null"]))

//Creating a function which give us the length of an array with the help simple method

// const lengthOfArray = (arr) => {
//     return arr.length;
// }
//  console.log(lengthOfArray([4, 65, 34, 2, "null", 43, 3, 4, 23, 5 , 54]))

//A function called once and repeatative calls result undefined with method one

// const once = (fn) => {
//     let called = false;
//     return function (...args) {
//         if(!called){
//             called = true;
//             return fn(...args);
//         }
//         return undefined;
//     }
// }

// const greet = () => "Hello, Babar what's up";

// const greetOnce = once(greet);
// console.log(greetOnce());
// console.log(greetOnce())
// console.log(greetOnce())

//A function called once and repeatative calls result undefined with Arrow functions
// const once = (fn) => {
//     let called = false;
//     return  (...args) => !called ? (called = true, fn(...args)) : undefined;
   
// }

// const greet = () => ("Hi Babar what's up");
// const greetOnce = once(greet);

// console.log(greetOnce())
// console.log(greetOnce())
// console.log(greetOnce())

//A function called once and repeatative calls result undefined with Prototype method

// const once = (fn) => {
//     return function (...args) {
//         if(!fn) return undefined;
//         let result = fn(...args);
//         fn = null;
//         return result;
//     }
// }

// const greet = () => "Hi Babar how are you doing";

// const greetOnce = once(greet);

// console.log(greetOnce())
// console.log(greetOnce())
// console.log(greetOnce())