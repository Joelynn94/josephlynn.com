---
title: "JavaScript arrays for beginners - Removing values"
date: "2020-06-25"
tags: ["javascript", "arrays", "beginners"]
excerpt: "In this post I will be showing you how to use a couple different methods to remove existing values from arrays using JavaScript."
---

I recently finished (May 2020) the coding bootcamp I started back in October 2019. Now I am going back through materials to make sure I understand the fundamentals. I will be showing you a couple ways to remove values from arrays. Here is my attempt to show you how to work with basic arrays.

<em>Note: I recently wrote another blog post on how to add values to arrays you can check that out here: [Working with Arrays in JavaScript for beginners - Adding values](https://dev.to/joelynn94/working-with-arrays-in-javascript-1jfi)</em>

## Removing array values

Let's start by creating an array with a couple values.

```javascript
let newArray = ["Hello", "World"];
```

## Removing array values from the beginning (basic)

The easiest way to remove an item from the beginning of an array is to use the shift method.

```javascript
// REMEMBER: arrays index start at 0 - so index[0] is the first value

// here we are removing 'Hello" from the first index [0] - using the shift method
newArray.shift();

console.log(newArray);
// Our results? The newArray now looks like this
["World"];
```

## Removing values from the end of an array (basic)

The pop method allows you to remove (pop) values from an array.

```javascript
// going back to our original array
let newArray = ["Hello", "World"];
// using the pop method - we are removing the last item from the array (which is index[1] in this case)
newArray.pop();

console.log(newArray);
// now the array looks like this - 'World' was removed
["Hello"];
```

## Removing values using splice

The splice method can be used for adding, removing or replacing values from an array. Using this method is a little more difficult than the last ones I have shown you.

First you need to indicate the index you want to make changes at. In our case I start at index 2. Then you indicate how many elements you want to delete from that index.

```javascript
// starting values
let newArray = ["Hello", "World", "New", "Values"];

// now say we want to remove the word 'New' from this array
// we need the index of the value we want to remove (which is index[2] in this case)
// then we need to specify how many elements we want to remove
// let's remove 1 value right now
newArray.splice(2, 1);
console.log(newArray);
// the results are
["Hello", "World", "Values"];
```

IMPORTANT NOTE

```javascript
// by default if you do not provide both arguments to splice,
// the value at the index you specified and everything that comes after that - will get deleted
newArray.splice(2);

// that will delete the value at index 2 and everything after index 2
console.log(newArray);
["Hello", "World"];
```

Let's remove multiple values

```javascript
// starting values
let newArray = ["Hello", "World", "New", "Values"];

// now say we want to remove the word 'World' from this array and everything that comes after that
newArray.splice(1, 3);
console.log(newArray);
// the results are
["Hello"];
```

And that's it. This was a demonstration on basic ways to remove values from arrays.

Thanks for reading!
