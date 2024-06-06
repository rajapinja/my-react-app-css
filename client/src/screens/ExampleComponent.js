import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect with dependency array to control when the effect should run
  useEffect(() => {

    
    console.log('Effect ran :', count);

    // This effect will only run when the count state changes
  }, [count]);

  return (
    <div>
        <h3>Hook - useEffect</h3>

        useEffect, useState, and Count as dependency argument
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleComponent;
