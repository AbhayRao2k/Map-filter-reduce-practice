/*

1. map Basics: Transforming an Array

Problem: You have an array of numbers. Double each number and return a new array.

const numbers = [1, 2, 3, 4, 5];

// Expected output: [2, 4, 6, 8, 10]

*/

// Solution

const map1 = [1, 2, 3, 4, 5];

const updatedMap = map1.map((n) => n * 2);

console.log(updatedMap);

/* 

2. filter Basics: Filtering an Array

Problem: You have an array of numbers. Keep only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6];

// Expected output: [2, 4, 6]

*/

// Solution

const filter1 = [1, 2, 3, 4, 5, 6];

const updatedFilter = filter1.filter((n) => n % 2 === 0);

console.log(updatedFilter);

/*

3. reduce Basics: Summing Numbers

Problem: You have an array of numbers. Find the total sum of the numbers.

const numbers = [1, 2, 3, 4, 5];

// Expected output: 15

*/

// Solution

const reduce1 = [1, 2, 3, 4, 5];

const initialValue = 0;

const updatedReduce = reduce1.reduce((a, b) => a + b, initialValue);

console.log(updatedReduce);

// Now combining all these methods

/*

4. Combining map and filter

Problem: Given an array of numbers, double each number and keep only those greater than 10.

const numbers = [3, 5, 8, 2, 7];

// Expected output: [16, 14]

*/

// Solution

const numbers1 = [3, 5, 8, 2, 7];

const doubledNumbers = numbers1.map((num) => num * 2);

console.log(doubledNumbers);

const filteredNumbers = doubledNumbers.filter((num) => num > 10);

console.log(filteredNumbers)

/*

5. Combining map, filter, and reduce

Problem: Given an array of numbers, double each number, filter out numbers less than 10, and find the total sum.

const numbers = [3, 5, 8, 2, 7];

// Expected output: 30

*/

const numbers2 = [3, 5, 8, 2, 7];

const doubledNums = numbers2.map((num) => num * 2);

console.log(doubledNums)

const filteredNums = doubledNums.filter((num) => num < 10);

console.log(filteredNums)

const initialNum = 20

const totalSum = filteredNums.reduce((prev, next)=> prev + next, initialNum)

console.log(totalSum)