import React, { useState } from 'react';
import '../css/counterCSS.css';

function CounterScreen() {
  // Define a state variable called `count` and a function to update it called `setCount`
  const [count, setCount] = useState(0); //initializes a state variable named count with an initial value of 0.
                                        //setCount is a function that allows you to update the value of count.
                                       // The onClick event handlers for the buttons call setCount to increment or decrement the count state.
                                    //  This component will render a paragraph showing the current value of count, 
                                    //   along with two buttons to increment and decrement it. Each time you click one of the buttons, React will re-render the component with the updated value of count.

     // Event handler to update the input value state
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
    
  return (
    <div>
        <h4>Event Handlers - Hook - useState</h4>
        Counter ( EventHandler(onClick, handleIncrement, handleDecrement), useState, button, css(className)) 
      <p >Count: {count}</p>
      <button onClick={handleIncrement}  className="increment">Increment</button>
      <button onClick={handleDecrement} className='decrement'>Decrement</button>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> 
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </div>
  );
}

export default CounterScreen;