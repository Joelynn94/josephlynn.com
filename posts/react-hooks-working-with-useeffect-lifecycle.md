---
title: "React hooks - working with useEffect (lifecycle)"
date: "2021-05-21"
tags: ["javascript", "react"]
excerpt: "This quick tutorial shows you how to start using the useEffect hook and how you can change when the useEffect runs."
---

## Side Effects

Sometimes your component may have a side effect. Some examples of side effects are:

-   Getting data from an API
-   Changing the DOM manually
-   Using a DOM plugin outside of React (like a map)

There are two kinds of side effects, those that require cleanup and those that don't.

## Effects without cleanup

You will not need to cleanup if you want an effect to run after every page render. This is the default behavior of useEffect (to run after the first render and every updated).

```js
import React, { useEffect } from "react";

useEffect(() => {
	document.title = "New Document Title";
});
```

## Effects with cleanup

Sometimes you will need to cleanup an effect to avoid a memory leak. React performs the cleanup after the component unmounts.

## Component Lifecycle

### 1. Once, after component is added to the DOM (mounted)

To run an effect after a component has mounted, add a dependency array.

```js
import React, { useEffect } from "react";

useEffect(() => {
	console.log("Run on component mount");
	// notice the `,` and `[]`
}, []);
```

### 2. Once, after component mounted and once before unmount

To run an effect after a component was unmounted, return a function inside the useEffect.

```js
import React, { useEffect } from "react";

useEffect(() => {
	console.log("Run on component mount");
	// similar to the previous example, but with cleanup
	return () => {
		console.log("Run after component unmounts");
	};
}, []);
```

### 3. Run on every render

To run on every render, simply omit the comma and square brackets.

```js
import React, { useEffect } from "react";

useEffect(() => {
	console.log("Run on component mount");
	// notice the `,` `[]` are no longer there
});
```

### 4. Conditional render (state change)

To re-render based on a specific state change, add the state to the dependency array.

```js
import React, { useEffect } from "react";
const [stateChange, setStateChange] = useState(0);

useEffect(() => {
	console.log("Run on component mount");
	// notice the `,` and `[]` are back and has the piece of state as a dependency
}, [stateChange]);
```

This quick tutorial shows you how to start using the useEffect hook and how you can change when the useEffect runs.

Thanks for reading!
