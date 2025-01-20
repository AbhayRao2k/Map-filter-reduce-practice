/*

1. Transform and Sort Names

Problem:
You have an array of objects containing name and age.

• Extract just the names.
• Convert them to uppercase.
• Sort the names alphabetically.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "Diana", age: 28 }
];

// Expected output: ["ALICE", "BOB", "CHARLIE", "DIANA"]

*/

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "Diana", age: 28 },
];

const extractNames = people.map((person) => person.name);
console.log(extractNames);

const upperCaseNames = extractNames.map((name) => name.toUpperCase());

console.log(upperCaseNames);

const sortedNames = upperCaseNames.sort();

console.log(sortedNames);

/*

2. Find the Longest Word

Problem:
Given an array of strings, find the length of the longest word.

const words = ["apple", "banana", "cherry", "watermelon"];

// Expected output: 10 (length of "watermelon")

*/

const words = ["apple", "banana", "cherry", "watermelon"];
const wordLength = words.map((word) => word.length);
console.log(wordLength);

const longestLength = wordLength.reduce(
  (max, length) => Math.max(max, length),
  0
);
console.log(longestLength);

/*

3. Filter and Sum

Problem:
You have an array of numbers.

• Filter out the odd numbers.
• Then sum up the remaining even numbers.

const numbers = [15, 28, 4, 19, 20, 11, 32];

// Expected output: 84 (28 + 4 + 20 + 32)

*/

const numbers = [15, 28, 4, 19, 20, 11, 32];

// Method 1: Step by step
/*
const filteredOdd = numbers.filter((num)=> num % 2 === 0)
console.log(filteredOdd)

const totalSum = filteredOdd.reduce((sum, number)=> sum + number, 0)
console.log(totalSum)
*/

// Method 2: Chaining approach

const totalSum = 0;

const filteredOdd = numbers
  .filter((num) => num % 2 === 0)
  .reduce((sum, num) => sum + num, totalSum);

console.log(filteredOdd);

/*

4. Group by Category

Problem:
You have an array of products, each with a name and category.
Group the products by category.

const products = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Broccoli", category: "Vegetable" }
];

// Expected output:
{
  Fruit: ["Apple", "Banana"],
  Vegetable: ["Carrot", "Broccoli"]
}

*/

const products = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Broccoli", category: "Vegetable" },
];

const groupedItems = products.reduce(
  (result, item) => {
    if (item.category === "Fruit") {
      result.Fruit.push(item.name);
    } else if (item.category === "Vegetable") {
      result.Vegetable.push(item.name);
    }
    return result;
  },
  { Fruit: [], Vegetable: [] }
);

console.log(groupedItems)
