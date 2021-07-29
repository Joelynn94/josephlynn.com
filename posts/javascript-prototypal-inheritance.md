---
title: "JavaScript - Prototypal Inheritance"
date: "2021-07-23"
tags: ["javascript", "inheritance", "oop", "classes"]
excerpt: "Prototypal inheritance is more flexible than classical inheritance. With classical inheritance, you inherit all of the parent's methods. With prototypal inheritance, you can inherit specific functions by adding them to the .prototype."
---

JavaScript is a prototype-based language that has prototypal inheritance. Which is not the same as classical inheritance. **_Prototypal inheritance is more flexible than classical inheritance._** With classical inheritance, you inherit all of the parent's methods. With prototypal inheritance, you can inherit specific functions by adding them to the .prototype.

I'll give some code examples below and here is the [code sandbox](https://codesandbox.io/s/javascript-prototypal-inheritance-bnj91) to view the code as well.

[Reference: class vs prototypal](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
[Reference: inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
[Reference: Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
[Reference: Constructor Pattern](https://www.educative.io/collection/page/5429798910296064/5725579815944192/5920633608208384)

## Classes are functions

Creating a class in JavaScript is syntax sugar (makes your code more readable). When creating classes, you are creating a function that serves as a constructor (a function called with the `new` operator). Here is what that looks like:

[Reference: new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

```js
// constructor function
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// creating an instance method on Person
// this method can be called on any new instance of Person
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// creating an instance method on Person
// this method can be called on any new instance of Person
Person.prototype.getAge = function () {
  return this.age;
};

console.log(typeof Person); // => function

// creating an instance of Person
const user = new Person("Joe", "Lynn", 27);
console.log(user.getFullName()); // => 'Joe Lynn'
console.log(user.getAge()); // => 27
```

### Class implementation of above example

```js
// create User class
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // creating a method getFullName()
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // creating a method getAge()
  getAge() {
    return this.age;
  }
}

console.log(typeof User); // => function

const user2 = new User("Sierra", "Lynn", 26);
console.log(user2.getFullName()); // => 'Sierra Lynn'
console.log(user2.getAge()); // => 26
```

## What is a prototype?

All JavaScript objects inherit properties and methods from a prototype. A prototype is an object that lets you store properties and methods that we want to be inherited further down the prototype chain.

```js
// Object prototype
{
  constructor: ƒ Object()
  hasOwnProperty: ƒ hasOwnProperty()
  isPrototypeOf: ƒ isPrototypeOf()
  propertyIsEnumerable: ƒ propertyIsEnumerable()
  toLocaleString: ƒ toLocaleString()
  toString: ƒ toString()
  valueOf: ƒ valueOf()
  __defineGetter__: ƒ __defineGetter__()
  __defineSetter__: ƒ __defineSetter__()
  __lookupGetter__: ƒ __lookupGetter__()
  __lookupSetter__: ƒ __lookupSetter__()
  get __proto__: ƒ __proto__()
  set __proto__: ƒ __proto__()
}
```

## What is the prototype chain?

The prototype chain is what makes inheritance possible. Every object in JavaScript inherits the prototype `Object`. You can walk up the prototype chain until you hit `null`.

```js
console.log(Object.getPrototypeOf(user)); /* => 
{
  getAge: ƒ ()
  getFullName: ƒ ()
  constructor: ƒ Person(firstName, lastName, age)
  __proto__: Object
}
*/
console.log(Object.getPrototypeOf(Object.getPrototypeOf(user))); /* =>
{
  constructor: ƒ Object()
  hasOwnProperty: ƒ hasOwnProperty()
  isPrototypeOf: ƒ isPrototypeOf()
  propertyIsEnumerable: ƒ propertyIsEnumerable()
  toLocaleString: ƒ toLocaleString()
  toString: ƒ toString()
  valueOf: ƒ valueOf()
  __defineGetter__: ƒ __defineGetter__()
  __defineSetter__: ƒ __defineSetter__()
  __lookupGetter__: ƒ __lookupGetter__()
  __lookupSetter__: ƒ __lookupSetter__()
  get __proto__: ƒ __proto__()
  set __proto__: ƒ __proto__()
}
*/
console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(user)))
); // => null
```

Thanks for checking out this post. Please leave feedback on what can be improved/corrected. I always want to learn more.
