---
title: "API requests with React (using the fetch API)"
date: "2021-05-28"
tags: ["javascript", "api", "fetch"]
excerpt: "Often times you will find yourself needing to pull data into your React app. In this tutorial, we will be using the fetch API - a browser API that lets you make network requests"
---

Often times you will find yourself needing to pull data into your React app. In this tutorial, we will be using the fetch API - a browser API that lets you make network requests. With this API you can send and retrieve data from your own backend or third party API.

You can checkout the [code sandbox](https://codesandbox.io/s/fetchapi-react-nnfu6) to see the code.

## Fetch API structure

To use the fetch API for a get request, follow this structure:

```js
fetch(
  "https://chroniclingamerica.loc.gov/search/pages/results/?andtext=florid&format=json"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

## 1. Add useEffect hook

Let's put this into a useEffect hook:

```js
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    fetch("https://chroniclingamerica.loc.gov/search/pages/results/?andtext=florid&format=json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
  // make sure to add the empty dependency array, or you will end
  // up in an infinite loop
  }, [])
```

## 2. Create simple state

We want to create 2 pieces of state. One to hold the data we get back from the request and one to toggle the loading state:

```js
  // we will use this state to set the data we get back from the
fetch request
  const [newsPapers, setNewsPapers] = useState([]);
  // it's good practice to have a loading state - this will help
  // if we want to display a loader component or disable a button
  // to stop users from repeatedly clicking and possibly breaking the application
  const [isLoading, setIsLoading] = useState(false);
```

## 3. Refine the fetch get request

We are missing a couple elements here. We are not handling an error and we need to change the loading state:

```js
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  // we will use this state to set the data we get back from the
  // fetch request
  const [newsPapers, setNewsPapers] = useState([]);
  // it's good practice to have a loading state - this will help
  // if we want to disable a button to stop users from repeatedly
  // clicking and possibly breaking the application
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // set the loading state to true - since this is a promise, we
    // know this will resolve sometime in the future
    setIsLoading(true);
    // to start - use fetch with a url argument
    fetch(
      "https://chroniclingamerica.loc.gov/search/pages/results/?andtext=florid&format=json"
    )
      // resolve with a .then() and use the .json() method to
      // extract the JSON body content from the response -
      // otherwise you will just get the HTTP response
      .then((response) => response.json())
      // now the data is in json format, we can use it. Just log
      // the data to see if you get the correct response
      .then((data) => {
        console.log(data);
      })
      // make sure to catch any error that occurs (just console
      // logging in this case)
      .catch((error) => console.log(error))
      // we can use the .finally() handler to set loading to false
      // finally returns a promise, and is called in both cases
      // of fulfilled (successful) or rejected (error)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>Hello Fetch API</h1>
    </div>
  );
}
```

We should see the data coming back from the fetch request. ![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s3sqmmwaqryisrothv92.png)

## 4. Set the data in state

Let's set the data into the newsPapers state:

```js
      .then((data) => {
        console.log(data);
        // if there is data
        if(data) {
          // use the data returned to set the newsPapers state
          setNewsPapers(data)
        }
      })
```

The data will be set in state now. ![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w0enjrfzsgdfmf2qzhh6.png)

## 5. Use the data in JSX

A common error is when you try to print out the data `<h3>There are {newsPapers.items.length} newspapers</h3>`. This will return `Cannot read property 'length' of undefined`. Why is that? It breaks because we are trying to render out data that doesn't exist yet. Remember, that fetch is asynchronous, so when we first try to log the data in the JSX, it doesn't exist yet. We can fix this with conditional rendering or using the logical `&&` operator:

```js
// logical && operator
return (
  <div className="App">
    <h1>Hello Fetch API</h1>
    {/* render newsPapers.items.length only if newsPapers.items exists */}
    <h3>There are {newsPapers.items && newsPapers.items.length} newspapers</h3>
  </div>
);

// conditional rendering
return (
  <div className="App">
    <h1>Hello Fetch API</h1>
    {/* render newsPapers.items.length only if newsPapers.items exists */}
    <h3>
      There are {!newsPapers.items ? null : newsPapers.items.length} newspapers
    </h3>
  </div>
);
```

You should have a number appear now with no errors. ![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3yuui3k21oml8bepx6ni.png)

## Final code

Final code with a very simple loader.

```js
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  // we will use this state to set the data we get back from the fetch request
  const [newsPapers, setNewsPapers] = useState([]);
  // it's good practice to have a loading state - this will help if we want to disable a button to stop users from repeatedly clicking and possibly breaking the application
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // set the loading state to true - since this is a promise, we know this will resolve sometime in the future
    setIsLoading(true);
    // to start - use fetch with a url argument
    fetch(
      "https://chroniclingamerica.loc.gov/search/pages/results/?andtext=florid&format=json"
    )
      // resolve with a .then() and use the .json() method to extract the JSON body content from the response - otherwise you will just get the HTTP response
      .then((response) => response.json())
      // now the data is in json format, we can use it. Just log the data to see if you get the correct response
      .then((data) => {
        console.log(data);
        // if there is data
        if (data) {
          // use the data returned to set the newsPapers state
          setNewsPapers(data);
        }
      })
      // make sure to catch any error that occurs (just console logging in this case)
      .catch((error) => console.log(error))
      // we can use the .finally() handler to set loading to false - finally returns a promise, and is called in both cases of fulfilled (successful) or rejected (error)
      .finally(() => setIsLoading(false));
  }, []);

  console.log(newsPapers);
  return (
    <div className="App">
      <h1>Hello Fetch API</h1>
      {/* Simple example showing loading */}
      {isLoading && <p>Loading...</p>}
      {/* render newsPapers.items.length only if newsPapers.items exists */}
      <h3>
        There are {!newsPapers.items ? null : newsPapers.items.length}{" "}
        newspapers
      </h3>
    </div>
  );
}
```

Thanks for reading!
