---
title: "JavaScript Classes Explained"
date: "2021-07-14"
tags: ["javascript", "oop", "classes"]
excerpt: "Classes are a great way to organize code and make more code reusable. Think of classes as code blueprints - you can use them to create a new `instances`. Think of an instance as new data (or context) that follow the same data structure."
---

Classes are a great way to organize code and make more code reusable. Think of classes as code blueprints - you can use them to create a new `instances`. Think of an instance as new data (or context) that follow the same data structure. Every instance is unique and contains different data.

Let's build a simple example to understand the basics of Object-oriented programming (OOP).

You can view the code sandbox for a more interactive way to follow and mess around with the code (recommended to fork and try out yourself): [code sandbox](https://codesandbox.io/s/javascript-classes-6t3wf)

## Class syntax

```js
class Employee {
  constructor() {}
}
```

## What is a class?

Classes are functions that create new objects. If you check the type of `Employee`. It is a function. If you check the type of `new Employee`, you will see when a class is instantiated - you are creating an object.

[MDN Docs (Classes)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
[MDN Docs (instance variables)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#instance_properties)

```js
console.log(typeof Employee); // => function
console.log(typeof new Employee()); // => object
```

## Define a class

```js
/* 
its common practice to upper case the first character of every word 
with the rest in lower case (called UpperCamelCase)
*/
class Employee {
  /* 
   When you create a new instance of a class, the constructor()
   function will be automatically called
   if your class need to accept any arguments - you will need to
   pass them to the constructor 
  */
  constructor(firstName, lastName, occupation) {
    /*
     now we need to create instance variables - that way the we
     can use them throughout the class
    */
    // capture firstName param into this.firstName instance variable
    this.firstName = firstName;
    // capture lastName param into this.lastName instance variable
    this.lastName = lastName;
    // capture occupation param into this.occupation instance variable
    this.occupation = occupation;
  }
}
```

## Create a new Employee

To create an instance of a class, you have to use the new keyword before the name of the class. Let's create two new instances (instantiation) of an `Employee` and `console.log()` the variable we create. Each instance is different and the data passed to each instance is encapsulated.

```js
const employee1 = new Employee("Joe", "Lynn", "Developer");
console.log(employee1); /* => 
  Employee { 
    firstName: 'Joe', 
    lastName: 'Lynn', 
    occupation: 'Developer' 
  }
 */
const employee2 = new Employee("Sierra", "Lynn", "Photographer");
console.log(employee2); /* => 
  Employee { 
    firstName: 'Sierra',
    lastName: 'Lynn', 
    occupation: 'Photographer' 
  } 
*/
```

## Create an instance method

Instance methods are functions that can be called on an instance of a class. Write a function inside the class and then we are able to call it on an instance (employee1 or employee2).

[MDN Docs (instance variables)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#prototype_methods)

```js
class Employee {
  constructor(firstName, lastName, occupation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
  }

  // create a function inside the class
  logEmployeeInfo() {
    // here we are just going to log all of the employee information
    // we can use the instance variables created in the constructor
    console.log(
      `Employee ${this.firstName} ${this.lastName} is working as a ${this.occupation}`
    );
  }
}
```

Now to use this method, we are going to call it on the instances we created using dot notation.

```js
console.log(employee1.logEmployeeInfo()); // =>
// "Employee Joe Lynn is working as a Developer"
console.log(employee2.logEmployeeInfo()); // =>
// "Employee Sierra Lynn is working as a Photographer
```

## Getters & Setters

Getters and setters are often mostly used for validating or modifying values. An advantage of using setters and getters is being able to control how a value if stored and returned. For example, let's say we always want to make sure the firstName is always a string. We can define a setter for the firstName property.

[MDN Docs (setters)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

```js
  // define a setter by creating a function with the keyword "set" prefixing the function name
  set firstName(value) {
    // common practice to use an "_" as a prefix to a show that the property should not be accessed from the outside
    // the variable in the setter should NOT be the same as the instance variable declared in the constructor. That would create an infinite loop because when you try to access this.firstName within the class, JavaScript will automatically call the setter function.
    this._firstName = String(value)
  }
```

Now we can define a getter

```js
  // define a getter by creating a function with the keyword "get" prefixing the function name
  get firstName() {
    // return the _firstName value from the setter
    return this._firstName
  }
```

When we call the method firstName on an instance, we will get the firstName value

```js
console.log(employee1.firstName); // => "Joe"
console.log(employee2.firstName); // => "Sierra"
```

## Class inheritance

With classes you can create new objects based on a "parent" object. By extending a class you create a child class that gives you access to the same methods and behavior as the parent class (called inheritance).

Reference: [MDN Docs (Inheritance)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)

Here's a quick example:

```js
// class inheritance
class Manager extends Employee {}

const manager1 = new Manager("Brian", "Smith", "CEO");
console.log(manager1); // =>
/*
  Manager {
    firstName: "Brian", 
    lastName: "Smith", 
    occupation: "CEO",
  }
*/
console.log(manager1.logEmployeeInfo()); // =>
// Employee Brian Smith is working as a CEO
```

## Why extend a class?

The main reason to extend a class is to reduce code duplication. You can create a new class (like the `Manager` class) and add new functionality or change functionality. Let's change what gets logged when we call the logEmployeeInfo method.

Reference: [MDN Docs (extends)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

```js
class Manager extends Employee {
  logEmployeeInfo() {
    console.log(
      `The owner of the company is ${this.firstName} ${this.lastName} and is the ${this.occupation}`
    );
  }
}

console.log(manager1.logEmployeeInfo()); // =>
// "The owner of the company is Brian Smith and is the CEO"
```

## Super

What if we want to accept different arguments into the new `Manager` class we just created? We can use the `super` keyword which is used to access and call functions on an object's parent. This makes it so we can override the parent's constructor.

Reference: [MDN Docs (super)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)

```js
class Manager extends Employee {
  constructor(firstName, lastName, occupation, age) {
    // super() calls the parent class' constructor.
    super(firstName, lastName, occupation); // super must be called first
    this.age = age; // new parameter
  }

  logEmployeeInfo() {
    console.log(
      `The owner of the company is ${this.firstName} ${this.lastName} and is the ${this.occupation} and is ${this.age} years old`
    );
  }
}

// third example
const manager2 = new Manager("Jade", "Smith", "CEO", 35);
console.log(manager2); // =>
/*
  Manager {
    firstName: "Jade"
    lastName: "Smith"
    occupation: "CEO"
    age: 35
  }
*/
console.log(manager2.logEmployeeInfo()); // =>
// "The owner of the company is Jade Smith and is the CEO and is 35 years old"
```

Thanks for checking out this post. Please leave feedback on what can be improved.
