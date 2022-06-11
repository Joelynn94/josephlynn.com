---
title: "8 JavaScript array methods you should know"
date: "2021-05-26"
tags: ["javascript", "arrays"]
excerpt: "With most of these methods, you need to understand callbacks. A callback is a function passed as an argument to another function. When using the methods below - JavaScript will take your callback and call it for every single item in the array"
---

With most of these methods, you need to understand callbacks. A callback is a function passed as an argument to another function. When using the methods below - JavaScript will take your callback and call it for every single item in the array.

This is not an exhaustive list of array methods. Some will include a "Try it out" section. Try these methods out in the [code sandbox](https://codesandbox.io/s/javascript-array-methods-qn1zd).

## Array.filter()

```js
/* 
The filter() method creates a new array with all elements that 
pass the test implemented by the provided function.

If the callback function returns true, then the item will be 
included in the final array, if the callback returns false, then 
the item will **NOT** be included in the final array.
*/

const grades = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

const passingGrades = grades.filter((grade) => {
	return grade >= 70;
});

console.log(passingGrades); // => [70, 75, 80, 85, 90, 95, 100]
```

## Try it out

```js
const grades = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
// TODO - find all grades that are greater or equal to 90:
// 1. create a variable that will hold the new array
// 2. return an array of grades that are 90 or greater
```

Reference: [MDN docs: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Array.find(callback)

```js
/*
The find() method returns the value of the first element in the 
provided array that satisfies the provided testing function. If no 
values satisfy the testing function, undefined is returned.

You will get back the first item that matches the condition that 
you specify. If no items were found, you will get back undefined.
*/

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findId5 = ids.find((id) => {
	return id === 5;
});

console.log(findId5); // => 5
```

## Try it out

```js
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// TODO - find id 7:
// 1. create a variable that will hold the value that's found
// 2. return the id 7
```

Reference: [MDN docs: Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## Array.includes(item)

```js
/*
The includes() method determines whether an array includes a 
certain value among its entries, returning true or false as 
appropriate.

Returns true when an item exists in the array and false otherwise.
*/

const groceries = ["apples", "bananas", "bread", "milk"];

console.log(groceries.includes("apples")); // => true
```

## Try it out

```js
const groceries = ["apples", "bananas", "bread", "milk"];
// TODO - find 'bread' and try 'cereal':
// 1. console.log passing in a string argument to includes()
```

Reference: [MDN docs: Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## Array.indexOf(item)

```js
/*
The indexOf() method returns the first index at which a given 
element can be found in the array, or -1 if it is not present.
*/

const groceries = ["apples", "bananas", "bread", "milk"];

console.log(groceries.indexOf("bread")); // => 2
```

## Try it out

```js
const groceries = ["apples", "bananas", "bread", "milk"];
// TODO - find the index of 'milk' and what happens when you try 'cereal':
// 1. console.log passing in a string argument to indexOf()
```

Reference: [MDN docs: Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## Array.every(callback)

```js
/*
The every() method returns true when every item in the array 
satisfies the condition provided in the callback.
*/

const nums = [10, 15, 20, 25];
const allAbove10 = nums.every((num) => num >= 10);
const allAbove15 = nums.every((num) => num >= 15); // => false

console.log(allAbove10); // => true
console.log(allAbove15); // => false
```

Reference: [MDN docs: Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## Array.some(callback)

```js
/*
It returns true if, in the array, it finds an element for which 
the provided function returns true; otherwise it returns false. It 
doesn't modify the array. 

The some() method returns true when at least one item in the array 
satisfies the condition provided in the callback.
*/

const nums = [10, 15, 20, 25];
const someOver18 = nums.some((num) => num >= 18);
const someUnder10 = nums.some((num) => num < 10);

console.log(someOver18); // => true
console.log(someUnder10); // => false
```

Reference: [MDN docs: Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## Array.map(callback)

```js
/*
The map() method creates a new array populated with the results of 
calling a provided function on every element in the calling array.

You always get back an array containing the same number of items 
compared to the original array, but every item has most likely 
undergone some transformation. Make sure to return inside the map, 
otherwise you will get back undefined.  
*/

const names = ["joe", "sierra", "norah", "oliver"];

const upperCaseNames = names.map((name) => {
	return name.toUpperCase();
});

console.log(upperCaseNames); // => ["JOE", "SIERRA", "NORAH", "OLIVER"]
```

## Try it out

```js
const names = ["joe", "sierra", "norah", "oliver"];
// TODO - lowercase the names:
// 1. create a variable that will hold the new array values
// 2. return the lowercased names
```

Reference: [MDN docs: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Array.forEach(callback)

```js
/*
The forEach() method iterates over every item in an array. 
It executes a provided function once for each array element.

It will always look for the first parameter you define in your 
callback function and pass to it the correct value.
*/

const numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50];

const eachNumber = numbers.forEach((number) => {
	console.log(number);
});

console.log(eachNumber);

// OR sum numbers

const numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50];

function sumNumbers(numbers) {
	let sum = 0;
	numbers.forEach((number) => {
		if (number % 2 !== 0) {
			sum += number;
		}
	});
	return sum;
}

console.log(sumNumbers(numbers)); // => 120
```

## Try it out

```js
const numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50];
// TODO - sum all even numbers:
// 1. create a function that takes an array parameter
// 2. create a variable to hold the sum
// 3. loop over the numbers array
// 4. check (inside the foreach if the current number is even) - if it is even, add the number to the sum
// 5. return the sum
```

Reference: [MDN docs: Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
