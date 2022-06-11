---
title: "React hooks - working with state (objects)"
date: "2021-05-13"
tags: ["javascript", "react", "objects"]
excerpt: "To keep track of the state, we need to use the useState hook with an initial value. The initial value will typically be the data type you will be using. In this case we are using an empty object to declare the initial value."
---

## How to declare initial state

To use the useState hook you will need to import it from React.

You can view the code sandbox for a more interactive way to follow and mess around with the code (recommended to fork and try out yourself): [code sandbox](https://codesandbox.io/s/working-with-state-objects-6dx3w)

```js
import React, { useState } from "react";
```

To keep track of the state, we need to call the useState hook with an initial value. Since useState returns an array we are able to destructure the current state value and a function that lets you update the state.

Here's what that looks like.

```js
// variable name is up to you (state)
// then name your function the variable name but with "set" as a prefix (setState)
const [state, setState] = useState({});
```

## Creating the component

Let's start building a basic component. Here we will create the initial state to a basic component.

```js
// import React and the useState hook
import React, { useState } from "react";

// component function
function SimpleObjectComponent() {
	// set the initial state (an object with the properties we want since we know that's what we want the user variable value to start as)
	const [user, setUser] = useState({
		id: 1,
		name: "",
	});
}

export default SimpleObjectComponent;
```

Let's add a basic button to change the state and a spot in the DOM to see the state change.

```js
// JSX we want to return
return (
	// parent div to hold the button and h1
	<div className="App">
		{/* Get the value of user.name */}
		<h1>{user.name}</h1>
		{/* Call the handleNameChange function when the button is clicked */}
		<button onClick={handleNameChange}>Change name</button>
	</div>
);
```

This is all you will have for now:
![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zr7dnheh3gzi3qqizgpf.png)

## Creating component functionality

You see we declared a function called "handleNameChange". That function doesn't exist yet. Lets create that.

```js
// delcare the function
function handleNameChange() {
	// create a variable that produces a new value so we can use that new value to update state
	const updateItem = {
		// it's important to not mutate state directly, so here we are creating a copy of the current state using the spread syntax
		// you can also clone an object using Object.assign({}, user) (see below)
		...user,
		// after we copy the state, we can add new properties and/or new values to the copied state
		name: "Joe",
	};
	// no we want to update the state with the new value we created
	setUser(updateItem);

	// Object.assign method
	// create a copy of the user object
	const updatedObject = Object.assign({}, user);
	// change the copied object property "name"
	updatedObject.name = "Joe";
	// set the new state
	setUser(updatedObject);
}
```

Click the "Change name" button and you will see the state changed
![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vupd8qiohm8l4yzzldo2.png)

This quick tutorial shows you how to setup basic state values using objects and how you can return a new object state value.

Thanks for reading!
