"use strict";
// function countPositiveNumbers(arr: number[]): number {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             count++;
//         }
//     }
//     return count;
// }
// const numbers = [-3, 5, 0, 2, -8, 1];
// console.log(countPositiveNumbers(numbers));
//task-2
// function fizzBuzz(n: number): void {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(20);
//task-3
// function sumArray(arr: number[]): number {
//   return arr.reduce((sum, current) => sum + current, 0);
// }
// const numbers = [1, 2, 3, 4, 5];
// const result = sumArray(numbers);
// console.log(result); 
//task-4
// function countWords(str: string): number {
//   return str.trim().split(/\s+/).filter(Boolean).length;
// }
// const text = "Hello, world!";
// const wordCount = countWords(text);
// console.log(wordCount);
//task-5
// function findMax(arr: number[]): number {
//   if (arr.length === 0) {
//     throw new Error("Array is empty");
//   }
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const numbers = [3, 5, 7, 2, 8];
// const max = findMax(numbers);
// console.log(max); 
//task-6
// function findMin(arr: number[]): number {
//   if (arr.length === 0) {
//     throw new Error("Array is empty");
//   }
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// const numbers = [3, 5, 7, 2, 8];
// const min = findMin(numbers);
// console.log(min);
//task-7
// function contains(arr: number[], target: number): boolean {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return true;
//     }
//   }
//   return false;
// }
// const numbers = [3, 5, 7, 2, 8];
// const target = 5;
// const result = contains(numbers, target);
// console.log(result);
//task-8 
// function reverseArray(arr: number[]): number[] {
//   let reversed: number[] = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// const numbers = [1, 2, 3, 4, 5];
// const reversed = reverseArray(numbers);
// console.log(reversed);
//task-9
// function capitalizeWords(str: string): string {
//   let words = str.split(' ');
//   let capitalizedWords = words.map(word => {
//     if (word.length > 0) {
//       return word[0].toUpperCase() + word.slice(1).toLowerCase();
//     }
//     return word;
//   });
//   return capitalizedWords.join(' ');
// }
// const text = "this is a cat";
// const capitalized = capitalizeWords(text);
// console.log(capitalized); 
//task-10
// function average(arr: number[]): number {
//   if (arr.length === 0) {
//     throw new Error("Array is empty");
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// const numbers = [1, 2, 3, 4, 5];
// const avg = average(numbers);
// console.log(avg); 
