---
title: "Working with Arrays in JavaScript for beginners - Adding values"
date: "2020-05-16"
tags: ["javascript", "arrays"]
excerpt: "I will be showing you a couple methods to add new values to arrays."
---

I recently finished (May 2020) the coding bootcamp I started back in October 2019. Now I am going back through materials to make sure I understand the fundamentals. I will be showing you a couple ways to add values to arrays. Here is my attempt to show you how to work with basic arrays.

## Adding array values (basic)

Let's start by creating an empty array.

```javascript
let newArray = [];
```

Next let's add a couple values to the array.
We will do that by specifying a new index of the array and adding a value

```javascript
// declare the array and the location (index) you want to add a new value
// (remember: arrays index start at 0 - so index[0] is the first value)

// here we are adding 'Hello" to the first index [0]
newArray[0] = "Hello";
// here we are adding 'World' to the second index [1]
newArray[1] = "World";

console.log(newArray);
// Our results? The newArray now looks like this
["Hello", "World"];
```

## Adding values the to the end of an array (basic)

The push method allows you to add (push) values into an array.

```javascript
// using the push method - we are adding another index to the array
// with the value 'New value':
newArray.push("New value");

console.log(newArray);
// 'New' gets added to the end of the array
["Hello", "World", "New value"];
```

## Adding values to the beginning of an array (basic)

The unshift method allows you to add values at the beginning of an array

```javascript
// using the unshift method - we are adding another index to the array.
newArray.unshift("Beginning");

// unshift adds the new value to the beginning of the array
// and moves the existing array values to new indexes
console.log(newArray);
// now our array looks like
["Beginning", "Hello", "World", "New value"];
```

## Adding values to an array by creating a new array using concat

The concat method allows you to add values to an array. But unlike the push and unshift methods - this will create a brand new array.

```javascript
// declare a new variable and set the new variable equal to
// the the old array with the value you want to add
// Ex. syntax - array.concat(value)
let brandNewArray = newArray.concat("Newest Addition");

// you can see the value we added is at the end of the array
console.log(brandNewArray);
// our brandNewArray values are
["Beginning", "Hello", "World", "New value", "Newest Addition"];

console.log(newArray);
// and our newArray values are still
["Beginning", "Hello", "World", "New value"];
```

## Adding values using splice

The splice method can be used for adding, removing or replacing values from an array. Using this method is a little more difficult than the last ones I have shown you. We will be using the brandNewArray from the last example.

First you need to indicate the index you want to make changes at. In our case I started at index 3.

```javascript
// starting values
console.log(brandNewArray);
["Beginning", "Hello", "World", "New value", "Newest Addition"];

// if you run this - by default the value at the index you specified
// and anything after it, will get deleted
brandNewArray.splice(3);

// that will delete the value at index 3 and everything after index 3
console.log(brandNewArray);
["Beginning", "Hello", "World"];
```

Then you add how many values you want to delete. In our case I don't want to delete anything - so we will indicate that by adding (, 0).

```javascript
// starting values
console.log(brandNewArray);
["Beginning", "Hello", "World", "New value", "Newest Addition"];

// if you run this - by adding the 0 as the second argument, your array will not change,
// because you are stating you do not want to delete anything
brandNewArray.splice(3, 0);

// after using splice
console.log(brandNewArray);
["Beginning", "Hello", "World", "New value", "Newest Addition"];
```

Now we want to add a value to this array. The value will be added at the 3rd index of the array and won't remove any values from the array

```javascript
// starting values
console.log(brandNewArray);
["Beginning", "Hello", "World", "New value", "Newest Addition"];

// now we are adding 'splice addition' to our array
brandNewArray.splice(3, 0, "splice addition");

// the results
console.log(brandNewArray);
// this added 'splice addition' at the index we wanted to start at
// and shifted the rest of the array indexes by 1
[
  "Beginning",
  "Hello",
  "World",
  "splice addition",
  "New value",
  "Newest Addition",
];
```

And that's it. These are basic ways to add values to arrays. My next post will be showing you how to remove items from arrays.

Thanks for reading!
