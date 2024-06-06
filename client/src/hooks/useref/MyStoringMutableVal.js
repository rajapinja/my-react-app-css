import React, { useRef } from 'react';

function MyStoringMutableVal() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log('Count:', countRef.current);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyStoringMutableVal;