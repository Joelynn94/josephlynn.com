---
title: "React hooks - working with state (array of objects)"
date: "2021-05-15"
tags: ["javascript", "react", "arrays", "objects"]
excerpt: "This quick tutorial shows you how to setup basic state values using an array of objects and how you can return a new array state value."
---

## How to declare initial state

To use the useState hook you will need to import it from React.

You can view the code sandbox for a more interactive way to follow and mess around with the code (recommended to fork and try out yourself): [code sandbox](https://codesandbox.io/s/javascript-classes-6t3wf)

```js
import React, { useState } from "react";
```

To keep track of the state, we need to call the useState hook with an initial value. Since useState returns an array we are able to destructure the current state value and a function that lets you update the state.

Here's what that looks like.

```js
// variable name is up to you (state)
// then name your function, the variable name but with "set" as a prefix (setState)
const [state, setState] - useState([])
```

## Creating the component

Let's start building a basic component. Here we will create the initial state to a basic component.

```js
// import React and the useState hook
import { useState } from "react";
import "./styles.css";

// component function
function SimpleArrayOfObjectsComponent() {
  // set the initial state (an array with 1 object to start (this can be an empty object to start))
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Joe",
      type: "admin"
    }
  ]);

export default SimpleArrayOfObjectsComponent;
```

Let's add a basic button to change the state and a spot in the DOM to see the state change.

```js
// JSX we want to return
return (
  // parent div to hold the ul and li's
  <div className="App">
    <ul>
      {/* map over the users array */}
      {users.map((user) => (
        // display a <div> element with the user.name and user.type
        // parent element needs to have a unique key
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.type}</p>
        </div>
      ))}
    </ul>
    <button onClick={handleAddNewUser}>Add user</button>
  </div>
);
```

This is what we should have so far: ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5ciojno7jakf57p6c25f.png)

## Creating component functionality

You will see we declared a function called "handleAddNewUser". That function doesn't exist yet. Lets create that.

```js
// delcare the function
function handleAddNewUser() {
  // it's important to not mutate state directly, so here we are creating a copy of the current state using the spread syntax
  const updateUsers = [
    // copy the current users state
    ...users,
    // now you can add a new object to add to the array
    {
      // using the length of the array for a unique id
      id: users.length + 1,
      // adding a new user name
      name: "Steve",
      // with a type of member
      type: "member",
    },
  ];
  // update the state to the updatedUsers
  setUsers(updateUsers);
}
```

Click the "Add user" button and you will see a new list item added to the state: ![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vkl4pzhp2mz1o2q9qnq0.png)

This quick tutorial shows you how to setup basic state values using an array of objects and how you can return a new array state.
