---
title: "React hooks - working with state (arrays)"
date: "2021-05-14"
tags: ["javascript", "react", "arrays"]
excerpt: "To keep track of the state, we need to call the useState hook with an initial value. Since useState returns an array we are able to destructure the current state value and a function that lets you update the state."
---

## How to declare initial state

To use the useState hook you will need to import it from React.

You can view the code sandbox for a more interactive way to follow and mess around with the code (recommended to fork and try out yourself): [code sandbox](https://codesandbox.io/s/working-with-state-arrays-3g99o)

```js
import React, { useState } from "react";
```

To keep track of the state, we need to call the useState hook with an initial value. Since useState returns an array we are able to destructure the current state value and a function that lets you update the state.

Here's what that looks like.

```js
// variable name is up to you (state)
// then name your function, the variable name but with "set" as a prefix (setState)
const [state, setState] = useState([]);
```

## Creating the component

Let's start building a basic component. Here we will create the initial state to a basic component.

```js
// import React and the useState hook
import { useState } from "react";
import "./styles.css";

// component function
function SimpleArrayComponent() {
  // set the initial state (an array of user id's to start with)
  const [users, setUsers] = useState([1, 5, 8, 14, 20]);

export default SimpleArrayComponent;
```

Let's add a basic button to change the state and a spot in the DOM to see the state change.

```js
  // JSX we want to return
  return (
    // parent div to hold the ul and li's
    <div className="App">
      <ul>
        {/* map over the users array */}
        {users.map((userId) => (
          // display an <li> element with the userId
          // each element needs to have a unique key
          <li key={userId}>{userId}</li>
        ))}
        // **optional** if you do not have a unique key (like an id) then you are able to use the array index instead
        {{users.map((userId, index) => (
          <li key={index}>{userId}</li>
        ))}
        // **end optional**
      </ul>
      <button onClick={handleAddUserId}>Add user</button>
    </div>
  );
```

This is what we will have to start with:
![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hbjr5tye8gnwqg2rlv3v.png)

## Creating component functionality

You see we declared a function called "handleAddUser". That function doesn't exist yet. Lets create that.

```js
// delcare the function
function handleAddUserId() {
  // it's important to not mutate state directly, so here we are creating a copy of the current state using the spread syntax
  const updateUsers = [
    // copy the current users state
    // you can also clone an array using users.slice() (see below)
    ...users,
    // for simplistic purposes, we are just adding the new length of the array
    users.length + 1,
  ];
  // // updated the state to the updatedUsers
  setUsers(updateUsers);

  // array.slice method
  // create a copy of the users array
  const updatedArray = users.slice();
  // push the new length value to the copied array
  updatedArray.push(users.length + 1);
  // set the new state
  setUsers(updatedArray);
}
```

Click the "Add user" button and you will see a new list item added to the state:
![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/py057xfa08wo1n7rvv0m.png)

This quick tutorial shows you how to setup basic state values using arrays and how you can return a new array state value.
