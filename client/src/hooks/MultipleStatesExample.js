import React, { useReducer } from 'react';

// Define initial states
const initialState = {
  count: 0,
  name: '',
  loggedIn: false
};

// Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setName':
      return { ...state, name: action.payload };
    case 'toggleLoggedIn':
      return { ...state, loggedIn: !state.loggedIn };
    default:
      throw new Error();
  }
}

function MultipleStatesExample() {
  // Use useReducer with initial states
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>MultipleStates - useReducer -Hook</h4>
      It will maintain count, input value and logged in true/false by appending to spread operator ...
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <br />
      <hr/>
      <input 
        type="text" 
        value={state.name} 
        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })} 
      />
      <p>{state.name}</p>
      <hr/>     
      <p>{state.loggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button onClick={() => dispatch({ type: 'toggleLoggedIn' })}>Toggle Login</button>
    </div>
  );
}

export default MultipleStatesExample;
