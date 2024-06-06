// We initialize a state variable values as an empty array using the useState hook.
// We define a function addValue which generates a random number and adds it to the values array using the setValues function. 
// We use the spread operator (...) to create a new array with the existing values and the new value appended to it.
// We render a button that, when clicked, calls the addValue function to add a new value to the array.
// We render the values array as a list, with each value being displayed as a list item (<li>). 
// We use the map function to iterate over the values array and render each value.

import React, { useState } from 'react';

function AddValues() {
  // Define state variable to hold an array of values
  const [values, setValues] = useState([0,1,2]);

  // Function to add a new value to the array
  const addValue = () => {
    // Generate a random number to add
    const newValue = Math.floor(Math.random() * 100);

    console.log("Random Number :",newValue);
    // Use the spread operator (...) to create a new array with the existing values and the new value appended
    setValues([...values, newValue]);

    console.log("Values Array :", values);
  };

  return (
    <div>
      <h4>React Spread Operator ...</h4>
      We use the spread operator (...) to create a new array with the existing values and the new value appended to it.
      <button onClick={addValue}>Add Value</button>
      {/* <ul> */}
        {/* Render the values array as list items */}
        {values.map((value, index) => (
          <span key={index}>{value},</span>
        ))}
      {/* </ul> */}
    </div>
  );
}

export default AddValues;
