import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'multiply':
      return { count: state.count * 2 };
    case 'division':
      return { count: state.count / 2 };
    default:
      throw new Error();
  }
}

function  ReducerScreen() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4> Hook - useReducer </h4>
      <p>- useReducer(reducer, initialState)</p>
      <p>- function reducer (state, actionType) - state is counter, and actionType is dispatched by button onclick here</p>
      <p>- Button OnClick - will dispatch action type ( increment, decrement, multiply, division,...etc), here we are sending increment or decrement</p>
      
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'multiply' })}>Multiply</button>
      <button onClick={() => dispatch({ type: 'division' })}>Divide</button>
    </div>
  );
}

export default ReducerScreen;

// useReducer:
// Alternative to useState. Used for managing more complex state logic.
// Accepts a reducer function and an initial state, and returns the current state paired with a dispatch method.

// This is a React functional component that demonstrates how to use the useReducer hook to manage state in React. Let's break down the code:

// Import Statements: The code starts by importing React and useReducer hook from the 'react' package.

// Initial State: initialState object represents the initial state of our application. In this case, it contains a single property count initialized to 0.

// Reducer Function: The ReducerScreen function represents the reducer. 
   //It takes two parameters: state and action. Based on the action.type, it updates the state. In this case, it handles two actions: 'increment' and 'decrement'. For 'increment', it increments the count value by 1, and for 'decrement', it decrements the count value by 1. If the action type is neither 'increment' nor 'decrement', it throws an error.

// Counter Component: The Counter component is the main component that renders the counter UI and handles user interactions.

// useReducer Hook: Inside the Counter component, useReducer hook is used to manage state. It takes two arguments: the reducer function (ReducerScreen) and the initial state (initialState). It returns the current state (state) and a dispatch function. The dispatch function is used to dispatch actions to the reducer.

// Rendering: The component renders a <div> containing the current count value (state.count) along with two buttons: 'Increment' and 'Decrement'. Each button has an onClick event handler that dispatches the corresponding action to the reducer when clicked.

// In summary, this code demonstrates how to use the useReducer hook in React to manage complex state logic by encapsulating it within a reducer function. It's a more powerful alternative to useState hook when dealing with complex state updates or when the next state depends on the previous one.
