---
title: "How to build a React CRUD todo app (create/read todos)"
date: "2021-05-18"
tags: ["javascript", "react", "todoapp"]
excerpt: "As part of the series, "Build a CRUD todo application". In this post I will show you how to create and display the todo items using React."
---

In this series, we will build a todo application.

To begin, we will go over a very basic way to build this application and revise as we gain more knowledge.

I suggest following along and if you get stuck, you can fork the code from the [Code Sandbox](https://codesandbox.io/s/build-a-todo-app-with-react-cc4l8)

## 1. Set the initial state

Lets start with creating a couple state values.

```js
import { useState } from "react";
import "./styles.css";

export default function App() {
	// need state to keep track of todos
	const [todos, setTodos] = useState([]);
	// need state to keep track of the value in the input
	const [todo, setTodo] = useState("");

	return (
		<div className="App">
			<h1>Todo App</h1>
		</div>
	);
}
```

## 2. Build the JSX

Lets build out the skeleton of what we want to see on the screen.

```js
import { useState } from "react";
import "./styles.css";

export default function App() {
  // need a state to keep track of todos
  const [todos, setTodos] = useState([]);
  // need state to keep track of the value in the input
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      {/* create a form element */}
      <form>
        {/* create an input element */}
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
        />
      </form>

      {/* create a ul to hold all of the list items */}
      <ul className="todo-list">
        {/* map over the todos array which creates a new li element for every todo */}
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
```

Now we should have a simple input on the screen ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/khlcst21e896g5r50mvk.png)

## 3. Add todo functionality

We are going to create two functions to add new todos and keep track of the input value.

```js
import { useState } from "react";
import "./styles.css";

export default function App() {
  // need a state to keep track of todos
  const [todos, setTodos] = useState([]);
  // need state to keep track of the value in the input
  const [todo, setTodo] = useState("");

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
      {/* create a form element */}
      <form>
        {/* create an input element */}
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
        />
      </form>

      {/* create a ul to hold all of the list items */}
      <ul className="todo-list">
        {/* map over the todos array which creates a new li element for every todo */}
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
```

## 4. Finish the functionality

Now we need to use the functions we just built to actually make something happen.

```js
import { useState } from "react";
import "./styles.css";

export default function App() {
	// need a state to keep track of todos
	const [todos, setTodos] = useState([]);
	// need state to keep track of the value in the input
	const [todo, setTodo] = useState("");

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

Now you should start seeing the todos being added to the page. ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nbdzvb4fnyxtn2bv5nuj.png)
