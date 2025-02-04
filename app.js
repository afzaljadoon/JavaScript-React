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

//Finding the largest number with Math.max()

// const largestNumber = () => {
//     const numbers = [1, 23, 43, 54, 64, 5, 3, 75];
//     let largest = Math.max(...numbers);

//     return largest;
// }

// console.log(largestNumber())

//FInding the largest number with the help of reduce method
 
// const largestNumber = () => {
//     const numbers = [1, 23, 43, 54, 64, 5, 3, 75];

//     let largest = numbers.reduce((num, acc) => num > acc ? num : acc);
//     return largest;
// }

// console.log(largestNumber())

//Find largest number using .sort() method
//  const largestNumber = () => {
//     const numbers = [1, 23, 43, 54, 64, 5, 3, 75];
//     return numbers.sort((a, b) => b - a)[0];
    
//  }

//  console.log(largestNumber())