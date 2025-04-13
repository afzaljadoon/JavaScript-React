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

//Memoized Function using Object as cache

// const memoized = (fn) => {

//  const cache = {};

//  return function  (...args) {
//  const key = JSON.stringify(args);

//  if(cache.hasOwnProperty(key)){
//   return cache[key];
//  } else {
//   const result = fn(...args);

//   cache[key] = result;

//   return result;
//  }
//  }
// }

// function sum (a, b) {
//  return a + b;
// }
 
// const memoizedSum = memoized(sum);

// console.log(memoizedSum(2, 45))
// console.log(memoizedSum(2, 45))
// console.log(memoizedSum(5, 6))


// function fib(n) {
//  if(n<= 1) return 1;

//  return fib(n - 1) + (n - 2);
// }

// const memoizedFib = memoized(fib)

// console.log(memoizedFib(4))
// console.log(memoizedFib(4))
// console.log(memoizedFib(7))


// function factorial(n){
//  if (n <= 1) return 1;

//  return (n - 1) * n;

// }

// const memoizedFactorial = memoized(factorial);


// console.log(memoizedFactorial(6))
// console.log(memoizedFactorial(5))
// console.log(memoizedFactorial(10))

//emoized Function Using Map method for cache

// const memoize = (fn) => {

// const cache = new Map();



//  return function (...args) {

//   const key = JSON.stringify(args);

//   if(cache.has(key)){
//    return cache.get[key]
//   } else {
//    const result = fn(...args);

//    cache.set(key. result);

//    return result;
//   }
//  }
// }

// function sum (a, b) {
//  return a + b;
// }
 
// const memoizedSum = memoize(sum);

// console.log(memoizedSum(2, 45))
// console.log(memoizedSum(2, 45))
// console.log(memoizedSum(5, 6))


// function fib(n) {
//  if(n<= 1) return 1;

//  return fib(n - 1) + (n - 2);
// }

// const memoizedFib = memoize(fib)

// console.log(memoizedFib(4))
// console.log(memoizedFib(4))
// console.log(memoizedFib(7))

// function factorial(n){
//  if (n <= 1) return 1;

//  return (n - 1) * n;

// }

// const memoizedFactorial = memoize(factorial);


// console.log(memoizedFactorial(6))
// console.log(memoizedFactorial(5))
// console.log(memoizedFactorial(10))

//Memoized Function with weakMap method

// const memoize = (fn) => {
//  const cache = new WeakMap();

//  return function (...args) {

//   const key = args[0] || args;

//   if(cache.has(key)){
//    return cache.get(key);
  
//   }else {
//    const result = fn(...args);

//     cache.set(key, result);

//     return result;
//   }
//  }
// }


// function sum (a, b) {
//  return a + b;
// }
 
// const memoizedSum = memoize(sum);

// console.log(memoizedSum(2, 45))
// console.log(memoizedSum(2, 45))
// console.log(memoizedSum(5, 6))

// function fib(n) {
//  if(n<= 1) return 1;

//  return fib(n - 1) + (n - 2);
// }

// const memoizedFib = memoize(fib)

// console.log(memoizedFib(4))
// console.log(memoizedFib(4))
// console.log(memoizedFib(7))

//Promises Problem


// const sumOfPromises = (promise1, promise2) => {
//  return Promise.all([promise1, promise2])
//  .then(([result1, result2]) => {

//   return result1 + result2;
//  })
// }

// const promise1 = Promise.resolve(50);
// const promise2 = Promise.resolve(30);

// sumOfPromises(promise1, promise2)
// .then(sum => {
//  console.log(sum);
// })

//Adding Error handling to the existing promise

// const sumOfPromises = (promise1, promise2) => {
//   return Promise.all([promise1, promise2])
//   .then(([result1, result2]) => {
//    if(typeof result1 !== 'number' || typeof result2 !== 'number'){
//     throw new Error('Both Promises must resolve to a number')
//    }
//    return result1 + result2;
//   })
//   .catch(error => {
//    console.error('Error:', error.message)
//    throw error;
//   })
// }

// const promise1 = Promise.resolve(20);
// const promise2 = Promise.resolve(20);

// sumOfPromises(promise1, promise2)
// .then(sum => {
//  console.log(sum)
// })
// .catch(error => {
//  console.error('Failed to sum promises:', error)
// })

//Async Await method

// const sumOfPromises = async (promise1, promise2) => {
//   const value1 = await promise1;
//   const value2 = await promise2;

//   return value1 + value2;

// }

// sumOfPromises(Promise.resolve(30), Promise.resolve(30)).then(console.log)

// .then Chainging method

// const sumOfPromises = (promise1, promise2) => {
//  return promise1.then(value1 => 
//   promise2.then(value2 =>  value1 + value2 )
// )
// }

// sumOfPromises(Promise.resolve(43), Promise.resolve(34)).then(console.log)

//Promise.resolve() method

// const sumOfPromises = (promise1, promise2) => {
//  return Promise.resolve(promise1)
//  .then(value1 => Promise.resolve(promise2)
// .then(value2 => value1 + value2))
// }

// sumOfPromises(Promise.resolve(43), Promise.resolve(344)).then(console.log)

//Method to wait a task for some time 
// const sleep = async (millis) => {
//  return new Promise((resolve) => {
//      setTimeout(() => {
//          resolve("Done Sleeping")
//      }, millis)
//  })
// }

// const main = async () => {
//  console.log("Sleeping for 2000 milliseconds");
//  await sleep(2000);
//  console.log("Wake up now");
// };

// main();

//Waiting task with the help of IIFE function
// const sleep = (millis) => new Promise(resolve => setTimeout(resolve, millis));

// (async () => {
//     console.log("Sleeping for 2000 milliseconds");
//     await sleep(2000);
//     console.log("Wake up now");
// })();

// With help of Generator function
// function* sleepGenerator(millis) {
//  console.log("Sleeping for 2000 milliseconds");
//  yield new Promise(resolve => setTimeout(resolve, millis));
//  console.log("Wake up now");
// }

// const iterator = sleepGenerator(2000);
// iterator.next().value.then(() => iterator.next());

// Using setTimeout 
// console.log("Sleeping for 2000 milliseconds");

// setTimeout(() => {
//     console.log("Wake up now");
// }, 2000);

// setTimeout wrapped in Promise.then()
// const sleep = (millis) => new Promise(resolve => setTimeout(resolve, millis));

// console.log("Sleeping for 2000 milliseconds");

// sleep(2000).then(() => {
//     console.log("Wake up now");
// });


//Function to delay for some time and if job done so another function to cancel the function 

// const delayWithCancel = (fn, args, t) => {

//  const timeoutId = setTimeout(() => {
//   fn(...args)
//  }, t);

//  return cancelFn = () => {
//   clearTimeout(timeoutId)
//  }

 
// }

// const greet = (name) => {
// console.log(`Hello, ${name}`);
// }

// const cancelGreet = delayWithCancel(greet, ['Afzal'], 3000)

// setTimeout(() => {
//  cancelGreet();
//  console.log("Greeting canceled");
// }, 1000);


//job done with the flag

// const delayWithCancel = (fn, args, t) => {
//  let isCancelled = false;

//  setTimeout(() => {
//   if(!isCancelled);
//   fn(...args);
//  }, t);

//  const cancelFn = () => {
//   isCancelled = true;
//  }

//  return cancelFn;
// }

// function greet(name) {
//  console.log(`Hello, ${name}!`);
// }


// const cancelGreet1 = delayWithCancel(greet, ["Alice"], 3000);
// setTimeout(() => {
//  cancelGreet1(); 
// }, 1000);


//Cancel interval

// const createCancelableFunction = (fn, args, t) => {
//  fn(...args);

//  const intervalId = setInterval(() => fn(...args), t);

//  const cancelFn = () => {
//   clearInterval(intervalId);
//  }

//  return cancelFn;
// }

// const greet = (name) => {
//  console.log(`Hello, ${name}!`);
// }

// const cancelTimeMs = 5000;
// const intervalMs = 1000;
// const args = ["Alice"];

// const cancelFn = createCancelableFunction(greet, args, intervalMs);

// setTimeout(cancelFn, cancelTimeMs);

//Promise time limit function using Promise.race()
// var timeLimit = function(fn, t) {
    
//  return async function(...args) {
//      return Promise.race([
//    fn(...args),
//    new Promise((_, reject) =>
//      setTimeout(() => reject("Time Limit Exceeded"), t)
//    ),
//  ]);
//  }

// };

// const asyncFunction = async (n) => {
//  await new Promise((res) => setTimeout(res, n));
//  return "Completed";
// };

// const limitedFunction = timeLimit(asyncFunction, 100);

// limitedFunction(50).then(console.log).catch(console.error);  
// limitedFunction(150).then(console.log).catch(console.error);

//Promise time limit using AbortController
// function timeLimit(fn, t) {
//  return async function (...args) {
//    const controller = new AbortController();
//    const timeout = setTimeout(() => controller.abort(), t);

//    try {
//      const result = await fn(...args, { signal: controller.signal });
//      clearTimeout(timeout);
//      return result;
//    } catch (error) {
//      throw "Time Limit Exceeded";
//    }
//  };
// }

// const asyncFunction = async (n) => {
//  await new Promise((res) => setTimeout(res, n));
//  return "Completed";
// };

// const limitedFunction = timeLimit(asyncFunction, 100);

// limitedFunction(50).then(console.log).catch(console.error);  
// limitedFunction(150).then(console.log).catch(console.error);

// Promise time limit using setTimeout wrapper method
// function timeLimit(fn, t) {
//  return async function (...args) {
//    return new Promise((resolve, reject) => {
//      const timer = setTimeout(() => reject("Time Limit Exceeded"), t);

//      fn(...args)
//        .then((res) => {
//          clearTimeout(timer);
//          resolve(res);
//        })
//        .catch((err) => {
//          clearTimeout(timer);
//          reject(err);
//        });
//    });
//  };
// }

// const asyncFunction = async (n) => {
//   await new Promise((res) => setTimeout(res, n));
//   return "Completed";
//  };
 
//  const limitedFunction = timeLimit(asyncFunction, 100);
 
//  limitedFunction(50).then(console.log).catch(console.error);  
//  limitedFunction(150).then(console.log).catch(console.error);

//Promise time limit using async/await with Promise.all()
// function timeLimit(fn, t) {
//  return async function (...args) {
//    let timeout;
//    try {
//      const result = await Promise.all([
//        fn(...args),
//        new Promise((_, reject) => {
//          timeout = setTimeout(() => reject("Time Limit Exceeded"), t);
//        }),
//      ]);
//      return result[0]; // Return the resolved value of fn
//    } finally {
//      clearTimeout(timeout);
//    }
//  };
// }

// const asyncFunction = async (n) => {
//    await new Promise((res) => setTimeout(res, n));
//    return "Completed";
//   };
  
//   const limitedFunction = timeLimit(asyncFunction, 100);
  
//   limitedFunction(50).then(console.log).catch(console.error);  
//   limitedFunction(150).then(console.log).catch(console.error);

//Promose time limit using EventEmitter
// const EventEmitter = require("events");

// function timeLimit(fn, t) {
//   return async function (...args) {
//     const emitter = new EventEmitter();

//     setTimeout(() => emitter.emit("timeout"), t);

//     return new Promise((resolve, reject) => {
//       emitter.once("timeout", () => reject("Time Limit Exceeded"));
//       fn(...args).then(resolve).catch(reject);
//     });
//   };
// }
 
// const asyncFunction = async (n) => {
//     await new Promise((res) => setTimeout(res, n));
//     return "Completed";
//    };
   
//    const limitedFunction = timeLimit(asyncFunction, 100);
   
//    limitedFunction(50).then(console.log).catch(console.error);  
//    limitedFunction(150).then(console.log).catch(console.error);

//Debounce
// const debounce = (fn, t) => {
// let timeoutId;
// return function (args){
//  clearTimeout(timeoutId);
//  timeoutId = setTimeout(() => fn(...args), t);
// }
// }

// function logMessage(message) {
//  console.log("Executed:", message);
// }

// const debouncedLog = debounce(logMessage, 50);
// debouncedLog("Hello");  
// setTimeout(() => debouncedLog("World"), 30);  
// setTimeout(() => debouncedLog("Final"), 70);

//Reverse String 

// const ReversedString = (str) => {
// const reverseString = str.split('');
// const reverseArray = reverseString.reverse();
// const reverseStr = reverseArray.join('');
// return reverseStr;
// }

// console.log(ReversedString("Hello World!"));

//To check if a string is plaindrome
// const isPalindrome = (str) => {
//  const cleanArr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//  const reverseArr = cleanArr.split('').reverse().join('');

// return cleanArr === reverseArr;
// }

// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("race"))

//Factorial of a number 

// const factorial = (n) => {
//  let result = 1;

//  for( let i = n; i >= 1; i--){
//   result *= i;
//  }

//  return result;
// }

// console.log(factorial(6))
// console.log(factorial(3))

//Fibonacci series 

// const fibonacci = (n) => {
//  const series = [0, 1];

//  if (n <= 2) return series.slice(0, n);

//  for (let i = 2; i < n; i++){
//  const nextNumber = series[i - 1] + series[i - 2];

//   series.push(nextNumber);
//  }
//  return series;
// }

// console.log(fibonacci(6))
// console.log(fibonacci(10))

//Find the largest number 

// const largestNumber = (arr) => {
//  let max = arr[0];

//  for(let i = 1; i < arr.length; i++){
//   if(arr[i] > max){
//    max = arr[i];
  
//   }
//  }
//  return max;
// }

// console.log(largestNumber([1, 2, 5, 3, 4, 10, 4]))

// const flattenArray = (arr) => {
//  let result = [];

//  for (let item of arr){
//   if(Array.isArray(item)){
//    result = result.concat(flattenArray(item))
//   } else {
//    result.push(item)
//   }
//  }
//  return result;
// }

// console.log(flattenArray([1, [2, 3], [4, [5]]]))

//Checking Anagram
// const isAnagram = (str1, str2) => {
//  const clean1 = str1.split('').sort().join('');
//  const clean2 = str2.split('').sort().join('');

//  return clean1 === clean2;
// }

// console.log(isAnagram("silent", "listen"))
// console.log(isAnagram("care", "race"))

//Capitalizing the first character of each word

// const capitilizeWord = (str) => {
//  return str
//  .split(' ')
//  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//  .join(' ');


// }

// console.log(capitilizeWord("hello world"))


// let a = [2, 4, 5];
// a[10] = 99;

// console.log(a.length)


// const removeDuplicate = (arr) => {
//  const uniqueArr = [];

//  for(let i = 0; i < arr.length; i++){
//   const currentELement = arr[i];
  
//   let isDuplicate = false;
 

//  for(let j = 0; j < uniqueArr.length; j++){
//   if(uniqueArr[j] === currentELement){
//    isDuplicate = true;
//    break;
//   }
//  }
//   if(!isDuplicate){
//    uniqueArr.push(currentELement);
//   }
//  }
//  return uniqueArr;
// }

// console.log(removeDuplicate([3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 43, 23, 54 , 67, 8, 9, 3, 4, 5, 3]));

// const sumNum = (arr) => {
//  let sum = 0; 

//  for ( let i = 0; i < arr.length; i++){
//   sum = sum + arr[i];
//  }

//  return sum;
// }

// console.log(sumNum([4, 5, 7, 4, 2, 6]));

//Remove the duplicate integer from an array

const removeDuplicate = (str) => {
 const arr = [];

 for (let i = 0; i < str.length; i++){
  const currentELement = str[i];

  let isDuplicate = false;

  for( let j = 0; j < arr.length; j++){
   if(arr[j] === currentELement){
    isDuplicate = true;
    break;
   }
  }

  if(!isDuplicate){
  arr.push(currentELement)
  }
 }
 return arr;
}

console.log(removeDuplicate([3, 5, 4, 3, 4, 5, 6 , 6 ]));