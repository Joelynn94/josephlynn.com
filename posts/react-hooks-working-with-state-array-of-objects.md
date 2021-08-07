---
title: "React hooks - working with state (array of objects)"
date: "2021-05-15"
tags: ["javascript", "react", "arrays", "objects"]
excerpt: "This quick tutorial shows you how to setup basic state values using an array of objects and how you can return a new array state value."
---

## How to declare initial state

To use the useState hook you will need to import it from React.

You can view the code sandbox for a more interactive way to follow and mess around with the code (recommended to fork and try out yourself): [code sandbox](https://codesandbox.io/s/javascript-classes-6t3wf)

_Edit: I've also added how to edit/update the state using an input and a couple buttons. Found at the bottom of this post._

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

## Add edit functionality

To add to this post, I am adding this section to show how you can implement a way to edit the array of object data.

### Adding more state

```js
// boolean state to know if we are editing (this will let us display
const [isEditing, setIsEditing] = useState(false);
// object state to set so we know which todo item we are editing
const [currentUser, setCurrentUser] = useState({});
```

### Edit functions to handle updating the state

```js
// function to get the value of the edit input and set the new state
function handleEditInputChange(e) {
  // set the new state value to what's currently in the edit input box
  setCurrentUser({ ...currentUser, name: e.target.value });
}

// function to handle when the "Edit user name" button is clicked
function handleEditClick(user) {
  // set isEditing to true
  setIsEditing(true);
  // update the state to the updatedUsers
  setCurrentUser({ ...user });
}

function handleUpdateUser(id, updatedUser) {
  // here we are mapping over the users array - the idea is check if the user.id matches the id we pass into the function
  // if the id's match, use the second parameter to pass in the updated user object
  // otherwise just use old user
  const updatedObject = users.map((user) =>
    user.id === id ? updatedUser : user
  );
  // set editing to false because this function will be used inside an onSubmit function - which means the data was submited and we are no longer editing
  setIsEditing(false);
  // update the users state with the updated user
  setUsers(updatedObject);
}

function handleEditFormSubmit(e) {
  e.preventDefault();

  // call the handleUpdateTodo function - passing the currentUser.id and the currentUser object as arguments
  handleUpdateUser(currentUser.id, currentUser);
}
```

### JSX update to have an input and form when isEditing is true

```js
  // JSX we want to return
  return (
    // parent div to hold the ul and li's
    <div className="App">
      {/* start - if the "edit user name" is clicked */}
      {currentUser.id && isEditing && (
        <form onSubmit={handleEditFormSubmit}>
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentUser.name}
            onChange={handleEditInputChange}
          />
          <button type="submit">Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
      {/* end - edit form */}
      <button onClick={handleAddNewUser}>Add new user</button>
      <ul>
        {/* map over the users array */}
        {users.map((user) => (
          // display a <div> element with the user.name and user.type
          // parent element needs to have a unique key
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.type}</p>
            {!isEditing && (
              <button onClick={() => handleEditClick(user)}>
                Edit user name
              </button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
```

This quick tutorial shows you how to setup basic state values using an array of objects and how you can return a new array state.

Edit: I've also added how to edit/update the state using an input and a couple buttons.

Thank you!
