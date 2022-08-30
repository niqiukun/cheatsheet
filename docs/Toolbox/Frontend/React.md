# React

## Basics

To understand React, let's start with a really basic React example:

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<p>Hello world!</p>);
```

While it seems like black magic that you can write HTML like mark-up in JavaScript, it actually does not work out of the box and has to be transpiled by compilers into plain JavaScript. It means that we can also achieve the same using the underlying JavaScript implementation, without the help of compilers:

```typescript
root.render(
  React.createElement('p', null, 'Hello world!');
);
```

For simplicity, in this document we will just use JSX elements instead of `createElement`.

### Functional Component

As the application grows big, it would be great not to write everything inside `render`. Hence, we can encapsulate individual components by separating them into functions that returns the respective React element.

```typescript
function Component() {
  return <p>Hello world!</p>;
}

root.render(<Component />);
```

This is equivalent to:

```typescript
function Component() {
  return React.createElement('p', null, 'Hello world!');
}

root.render(Component());
```

## Hooks

In a web application, it would be great if components can have their own internal states to keep track of things for display. However, it used to be challenging because functions are typically stateless: you give an input, and they produce an output based on your input. There is no difference in terms of output if you call a function many times with the same input.

However, things changed with the introduction of hooks: they not only allow functional components to have their own internal states, but also provide other features that make functional components as powerful as class components.

### `useState`

Here we have a simple example that makes use of `useState` hook:

```jsx live
function Component() {
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <div>The count is: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>
    </>
  );
}
```

Each time the counter changes, there is a rerender. However, the component does keep the count as an internal state and increment it properly. How is that possible?

First of all, for all React hooks, internally they call the respective hook functions on a dispatcher from a singleton module:

```js title="packages\react\src\ReactHooks.js"
import ReactCurrentDispatcher from './ReactCurrentDispatcher';

export function useState(initialState) {
  const dispatcher = ReactCurrentDispatcher.current;
  return dispatcher.useState(initialState);
}
```

There are two separate instances of the dispatcher, `HooksDispatcherOnMount` and `HooksDispatcherOnUpdate`, that exhibits different behavior depending on the status of the [React Fiber](https://github.com/acdlite/react-fiber-architecture). When Fiber is not initialized yet, hooks will be called on `HooksDispatcherOnMount`, and otherwise on `HooksDispatcherOnUpdate`. (Let's skip rerender for now.)

Let's first take a look at how `setState` is set up on mount:

```js
function mountState(initialState) {
  const hook = mountWorkInProgressHook(); // what magic is happening here?
  if (typeof initialState === 'function') {
    initialState = initialState(); // initialState may be an initializer
  }
  hook.memoizedState = hook.baseState = initialState;
  const queue = {
    pending: null,
    lanes: NoLanes,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState,
  };
  hook.queue = queue;
  const dispatch = (queue.dispatch = dispatchSetState.bind(
    null,
    currentlyRenderingFiber,
    queue
  ));
  return [hook.memoizedState, dispatch];
}
```

The key to setting up an internal state seems to be `mountWorkInProgressHook`. Again, let's take a sneak peak inside:

```js
// add a new hook to the linked list
function mountWorkInProgressHook(): Hook {
  const hook: Hook = {
    memoizedState: null, // actual state returned, set to initial state

    baseState: null, // set to initial state
    baseQueue: null,
    queue: null,

    next: null, // pointer to the next hook
  };

  // workInProgressHook is a pointer to the tail of a linked list of hooks
  if (workInProgressHook === null) {
    // initialize the linked list
    workInProgressHook = hook;
    currentlyRenderingFiber.memoizedState = workInProgressHook; // head of the linked list
  } else {
    // append to the linked list
    workInProgressHook.next = hook;
    workInProgressHook = workInProgressHook.next; // move tail of the linked list
  }
  return workInProgressHook;
}
```

```js
function dispatchSetState(
  fiber, // currentlyRenderingFiber
  queue, // hook.queue
  action // param of setState
) {
  const lane = requestUpdateLane(fiber);

  const update = {
    lane,
    action,
    hasEagerState: false,
    eagerState: null,
    next: null,
  };

  const root = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
  if (root !== null) {
    const eventTime = requestEventTime();
    scheduleUpdateOnFiber(root, fiber, lane, eventTime);
    entangleTransitionUpdate(root, queue, lane);
  }
}
```
