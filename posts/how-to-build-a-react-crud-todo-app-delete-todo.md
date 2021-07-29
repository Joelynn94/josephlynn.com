---
title: "How to build a React CRUD todo app (delete todo)"
date: "2021-05-19"
tags: ["javascript", "react", "todoapp"]
excerpt: "In this series, we will build a CRUD todo application. In this post I will show you how to delete todo items."
---

In this series, we will build a todo application.

To begin, we will go over a very basic way to build this application and revise as we gain more knowledge.

I suggest following along and if you get stuck, you can fork the code from [the Code Sandbox](https://codesandbox.io/s/build-a-todo-app-with-react-cc4l8).

In the previous posts, we created a very simple todo app that can add new todos and save the todos in localStorage. Now lets add the delete functionality.

## 1. Create the delete function

Here we are going to create the function we want to fire on a button click to remove a todo item from our todo array.

```js
// function to remove a todo item from the todo array
function handleDeleteClick(id) {
  // here we are filtering - the idea is remove an item from the todo array on a button click
  const removeItem = todos.filter((todo) => {
    // return the rest of the todos that don't match the item we are deleting
    return todo.id !== id;
  });
  // removeItem returns a new array - so now we are setting the todos to the new array
  setTodos(removeItem);
}
```

2. Add button to the JSX

Lets add a very basic button to the JSX.

```js
{
  /* create a ul to hold all of the list items */
}
<ul className="todo-list">
  {/* map over the todos array which creates a new li element for every todo
      (make sure to add the "key" prop using the unique todo.id value to the li element)
      remember this is an array of objects - so we need to access the property 
      "text" to get the value we want to display */}
  {todos.map((todo) => (
    // now we are adding a simple button that we can click on
    <li key={todo.id}>
      {/* Add the function we created above as the onClick handler 
          rememebr the handleDeletClick function needs to know which item we want to remove 
          so we need to pass the todo.id to the function - also on a side note,
          notice how we are calling the handleDeleteClick function, this makes sure we are not
          running the function on page load, but rather when the button is clicked */}
      {todo.text} <button onClick={() => handleDeleteClick(todo.id)}>X</button>
    </li>
  ))}
</ul>;
```

Now you should see a button with the text content "X" right next to a todo you add. ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d8ba1wg8uk1d66h0q80c.png)

## 3. Put it all together

Final code up to this point should look something like this.

```js
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleDeleteClick(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

This is the third post in this series. Keep in mind that in this post, we added the ability to delete a todo item in the app. We will continue to add more functionality in the coming posts.
