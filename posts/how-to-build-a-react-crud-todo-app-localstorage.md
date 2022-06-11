---
title: "How to build a React CRUD todo app (add localstorage)"
date: "2021-05-18"
tags: ["javascript", "react", "todoapp", "localstorage"]
excerpt: "As part of the series, "Build a CRUD todo application". In this post I will show you how to add lazy localstorage to save our todo items using React."
---

In this series, we will build a todo application.

To begin, we will go over a very basic way to build this application and revise as we gain more knowledge.

I suggest following along and if you get stuck, you can fork the code from the [Code Sandbox](https://codesandbox.io/s/build-a-todo-app-with-react-cc4l8)

In the previous post, we created a very simple todo app that can add new todos. Lets now add a simple storage option for the todo list.

## 1. Adding the useEffect hook

We are going to use the useEffect hook to add to our application. This useEffect hook will be responsible to save new todos into localstorage.

_[see MDN docs on JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)_

```js
// useEffect to run once the component mounts
useEffect(() => {
	// localstorage only support storing strings as keys and values
	// - therefore we cannot store arrays and objects without converting the object
	// into a string first. JSON.stringify will convert the object into a JSON string
	localStorage.setItem("todos", JSON.stringify(todos));
	// add the todos as a dependancy because we want to update
	// localstorage anytime the todos state changes
}, [todos]);
```

Now this is what we should have:

```js
// don't forget to import useEffect from react
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  // need a state to keep track of todos
  const [todos, setTodos] = useState([]);
  // need state to keep track of the value in the input
  const [todo, setTodo] = useState("");

  // useEffect to run once the component mounts
  useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therefore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    localStorage.setItem("todos", JSON.stringify(todos));
    // add the todos as a dependancy because we want to update the
    // localstorage anytime the todos state changes
  }, [todos]);

  // function to get the value of the input and set the new state
  function handleInputChange(e) {
    // set the new state value to what's currently in the input box
    setTodo(e.target.value);
  }

  // function to create a new object on form submit
  function handleFormSubmit(e) {
    // prevent the browser default behavior or refreshing the page on submit
    e.preventDefault();

    // don't submit if the input is an empty string
    if (todo !== "") {
      // set the new todos state (the array)
      setTodos([
        // copy the current values in state
        ...todos,
        {
          // setting a basic id to identify the object
          id: todos.length + 1,
          // set a text property to the value of the todo state and
          // trim the whitespace from the input
          text: todo.trim()
        }
      ]);
    }

    // clear out the input box
    setTodo("");
  }

  return (
    <div className="App">
      {/* create a form element and pass the handleFormSubmit function
      to the form using the onSubmit prop */}
      <form onSubmit={handleFormSubmit}>
        {/* create an input element - make sure to add the value prop
        with the state value passed in and the onChange prop to update
        the state every time something is typed in the input */}
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
      </form>

      {/* create a ul to hold all of the list items */}
      <ul className="todo-list">
        {/* map over the todos array which creates a new li element for every todo
        (make sure to add the "key" prop using the unique todo.id value to the li element)
        remember this is an array of objects - so we need to access the property
        "text" to get the value we want to display */}
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
```

## 2. Restoring todos from localstorage (lazy initial state)

We are going to change the initial state to what's saved in localstorage.

_[see react docs on lazy initial state](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state)_
_[see MDN docs on JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)_

```js
// because localstorage is synchronous - that could slow down the application
// instead of using an just an empty array as the initial state - we can use a function in its place,
// which will only be executed on the initial render
const [todos, setTodos] = useState(() => {
	// get the todos from localstorage
	const savedTodos = localStorage.getItem("todos");
	// if there are todos stored
	if (savedTodos) {
		// return the parsed JSON object back to a javascript object
		return JSON.parse(savedTodos);
		// otherwise
	} else {
		// return an empty array
		return [];
	}
});
```

## 3. Put it all together

Now we should have simple storage solution for our todos.

```js
// don't forget to import useEffect from react
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
	// need state to keep track of todos
	// because localstorage is synchronous - that could slow down the application
	// instead of using an just an empty array as the initial state - we can use a function in its place,
	// which will only be executed on the initial render
	// reference: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [todos, setTodos] = useState(() => {
		// get the todos from localstorage
		const savedTodos = localStorage.getItem("todos");
		// if there are todos stored
		if (savedTodos) {
			// return the parsed the JSON object back to a javascript object
			return JSON.parse(savedTodos);
			// otherwise
		} else {
			// return an empty array
			return [];
		}
	});
	// need state to keep track of the value in the input
	const [todo, setTodo] = useState("");

	// useEffect to run once the component mounts
	useEffect(() => {
		// localstorage only support storing strings as keys and values
		// - therfore we cannot store arrays and objects without converting the object
		// into a string first. JSON.stringify will convert the object into a JSON string
		// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
		localStorage.setItem("todos", JSON.stringify(todos));
		// add the todos as a dependancy because we want to update the
		// localstorage anytime the todos state changes
	}, [todos]);

	// function to get the value of the input and set the new state
	function handleIInputChange(e) {
		// set the new state value to what's currently in the input box
		setTodo(e.target.value);
	}

	// function to create a new object on form submit
	function handleFormSubmit(e) {
		// prevent the browser default behavior or refreshing the page on submit
		e.preventDefault();

		// don't submit if the input is an empty string
		if (todo !== "") {
			// set the new todos state (the array)
			setTodos([
				// copy the current values in state
				...todos,
				{
					// setting a basic id to identify the object
					id: todos.length + 1,
					// set a text property to the value of the todo state and
					// trim the whitespace from the input
					text: todo.trim(),
				},
			]);
		}

		// clear out the input box
		setTodo("");
	}

	return (
		<div className="App">
			{/* create a form element and pass the handleFormSubmit function 
      to the form using the onSubmit prop */}
			<form onSubmit={handleFormSubmit}>
				{/* create an input element - make sure to add the value prop 
        with the state value passed in and the onChange prop to update
        the state every time something is typed in the input */}
				<input
					name="todo"
					type="text"
					placeholder="Create a new todo"
					value={todo}
					onChange={handleInputChange}
				/>
			</form>

			{/* create a ul to hold all of the list items */}
			<ul className="todo-list">
				{/* map over the todos array which creates a new li element for every todo
        (make sure to add the "key" prop using the unique todo.id value to the li element)
        remember this is an array of objects - so we need to access the property 
        "text" to get the value we want to display */}
				{todos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</div>
	);
}
```

This is the second post in this series. Keep in mind that in this post, we added slightly more functionality to the app. We will continue to add more functionality in the coming posts.

Thanks for reading!
