import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // No dependencies, so the function won't be recreated on re-renders

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={increment} />
    </div>
  );
}

function ChildComponent({ increment }) {
  return (
    <div>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default ParentComponent;

// useCallback:
// Memoizes callback functions and prevents unnecessary re-creations of those functions.
// Useful for optimizing performance in child components that rely on callback props.