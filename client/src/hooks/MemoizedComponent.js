import React, { useMemo, useState } from 'react';

function MemoizedComponent() {
  const [number, setNumber] = useState(0);

  // Memoize the result of the expensive calculation
  const squaredNumber = useMemo(() => {
    console.log('Expensive calculation performed');
    return number * number;
  }, [number]); // Recalculate only when the `number` state changes

  return (
    <div>
      <p>Number: {number}</p>
      <p>Squared Number: {squaredNumber}</p>
      <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Increment</button>
    </div>
  );
}

export default MemoizedComponent;

// useMemo:
// Memoizes the result of a function and caches it until its dependencies change.
// Useful for optimizing expensive calculations or preventing unnecessary re-renders.
