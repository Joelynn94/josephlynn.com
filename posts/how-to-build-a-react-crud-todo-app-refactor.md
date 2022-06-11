---
title: "How to build a React CRUD todo app (refactor) "
date: "2021-05-23"
tags: ["javascript", "react", "todoapp"]
excerpt: "As part of the series, "Build a CRUD todo application". In this post I will show you we can refactor the todo app we built through this series."
---

In this series, we have built a todo application.

I suggest following along and if you get stuck, you can fork the code from [the Code Sandbox](https://codesandbox.io/s/build-a-todo-app-with-react-cc4l8).

In the previous posts, added the ability to edit todos. We have full CRUD functionality, but the application could be structured better, lets work on that.

There are a couple benefits of breaking up components:

-   Reusability - you are able to use a component anywhere in the application.
-   Isolation - it's helps with isolating bugs found in your code.

**_This is known as abstraction_**

## 1. Refactor todo item into it's own component

Start by moving the todo item to it's own component.

-   Create a new file called `TodoItem.js`. ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yiu8qw6z26dd3htym6gp.png)
-   Add the `li` item from the `App.js` file ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tlrrdmtj4h8xwr1yiyeu.png)

We are going to change the names of props that are functions. It's standard convention to change the name for props that are functions to start with `onSubjectEvent`. The `TodoItem.js` should look like this.

```js
// notice we are destructuring the props here. You could change this to
// bring in props instead and then just add `props.` to todo, onEditClick and onDeleteClick:
// export default function TodoItem(props)
export default function TodoItem({
	// passing the todo as a prop
	todo,
	// notice the name change of the function handleEditClick to onEditClick
	onEditClick,
	// notice the name change of the function handleDeleteClick to onDeleteClick
	onDeleteClick,
}) {
	return (
		// using the li element as the parent
		<li key={todo.id}>
			{todo.text}
			{/* don't forget to change the name of the functions */}
			<button onClick={() => onEditClick(todo)}>Edit</button>
			<button onClick={() => onDeleteClick(todo.id)}>Delete</button>
		</li>
	);
}
```

-   Import the `TodoItem` component into the `App.js`![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b43umjsn0netoct6cqos.png)
-   Use the `TodoItem` and pass the required props to it ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/32zlzoodcgr96ifd1rr6.png)

## 2. Refactor add todo form to it's own component

Start by moving the form for to add a new todo into a new file.

-   Create a new file called `AddTodoForm.js` ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uka9iqjwcieoy3rtover.png)
-   Add the `form` element to add a new todo from the `App.js` file to our new `AddTodoForm.js` file ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/egzbk9yd3bpqm4z1wtav.png)

Again, we are going to change the names of props that are functions. The `AddTodoForm.js` should look like this.

```js
export default function AddTodoForm({
	// passing the todo as a prop
	todo,
	// notice the name change of the function handleAddFormSubmit to onAddFormSubmit
	onAddFormSubmit,
	// notice the name change of the function handleAddInputChange to onAddInputChange
	onAddInputChange,
}) {
	return (
		// using the form element as the parent
		// notice the change for the function names in the onSubmit and onChange props
		<form onSubmit={onAddFormSubmit}>
			<h2>Add Todo</h2>
			<label htmlFor="todo">Create todo: </label>
			<input
				name="todo"
				type="text"
				placeholder="Create new todo"
				value={todo}
				onChange={onAddInputChange}
			/>
		</form>
	);
}
```

-   Import the `AddTodoForm` component into the `App.js` file ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2rxlrfglcbuhaweopkq4.png)
-   Use the `AddTodoForm.js` and pass the required props to it ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s44ug9mnwbbbkckvccn0.png)

## 3. Refactor add edit form to it's own component

Start by moving the form for to edit a todo into a new file.

-   Create a new file called `EditForm.js` ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d183wq9ruqhhiichucz3.png)
-   Add the `form` element to edit a todo from the `App.js` file to our new `EditForm.js` file

As a reminder, we are going to change the names of props that are functions. The `EditForm.js` should look like this.

```js
export default function EditForm({
	// still need the currentTodo
	currentTodo,
	// also need to be able to toggle setIsEditing
	setIsEditing,
	// notice the name change of the function handleEditInputChange to onEditInputChange
	onEditInputChange,
	// notice the name change of the function handleEditFormSubmit to onEditFormSubmit
	onEditFormSubmit,
}) {
	return (
		// using the form element as the parent
		// notice the change for the function names in the onSubmit and onChange props
		<form onSubmit={onEditFormSubmit}>
			<h2>Edit Todo</h2>
			<label htmlFor="updateTodo">Update todo: </label>
			<input
				name="updateTodo"
				type="text"
				placeholder="Update todo"
				value={currentTodo.text}
				onChange={onEditInputChange}
			/>
			<button type="submit" onClick={onEditFormSubmit}>
				Update
			</button>
			<button onClick={() => setIsEditing(false)}>Cancel</button>
		</form>
	);
}
```

-   Import `EditForm.js` component into the `App.js` file ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cc1su9ezzjodxj90ooc2.png)
-   Use the `EditForm.js` and pass the required props to it ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uuymx0y60jttjli9grz1.png)

## 4. Put it all together

After making the changes, we should have a file structure like this ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iif77ivvhrxl8xef1209.png)
`App.js` file:

```js
// App.js file
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import EditForm from "./EditForm";
import "./styles.css";

export default function App() {
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import EditForm from "./EditForm";
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
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="App">
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}
```

`AddForm.js` file:

```js
// AddForm.js
export default function AddTodoForm({
	todo,
	onAddFormSubmit,
	onAddInputChange,
}) {
	return (
		<form onSubmit={onAddFormSubmit}>
			<h2>Add Todo</h2>
			<label htmlFor="todo">Create todo: </label>
			<input
				name="todo"
				type="text"
				placeholder="Create new todo"
				value={todo}
				onChange={onAddInputChange}
			/>
		</form>
	);
}
```

`EditForm.js` file:

```js
// EditForm.js
export default function EditForm({
	currentTodo,
	setIsEditing,
	onEditInputChange,
	onEditFormSubmit,
}) {
	return (
		<form onSubmit={onEditFormSubmit}>
			<h2>Edit Todo</h2>
			<label htmlFor="updateTodo">Update todo: </label>
			<input
				name="updateTodo"
				type="text"
				placeholder="Update todo"
				value={currentTodo.text}
				onChange={onEditInputChange}
			/>
			<button type="submit" onClick={onEditFormSubmit}>
				Update
			</button>
			<button onClick={() => setIsEditing(false)}>Cancel</button>
		</form>
	);
}
```

`Todoitem.js` file:

```js
// TodoItem.js
export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
	return (
		<li key={todo.id}>
			{todo.text}
			<button onClick={() => onEditClick(todo)}>Edit</button>
			<button onClick={() => onDeleteClick(todo.id)}>Delete</button>
		</li>
	);
}
```

This is the fifth post in this series. Hope you enjoyed reading! If you have any suggestions/feedback, please let me know.

Thanks for checking out this series!
