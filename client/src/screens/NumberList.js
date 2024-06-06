import React from 'react';

// const NumberList = () =>{
  
// }

// const Variable = () => {
  
// }

// function NumberList() {
  
// }

function NumberList() {
  // Sample array of numbers
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
       <h4>List of Numbers:</h4>

       Array of Numbers, numbers.map(item, index)
    
        {/* Use the map function to iterate over the array and render each number */}
        {numbers.map((number, index) => (
          <span key={index}> {number}, </span>
        ))}
      
    </div>
  );
}



export default NumberList;

// In this example:

// We have an array called numbers containing some sample numbers.
// Inside the ul element, we use the map function to iterate over the numbers array.
// For each number in the array, we render a li (list item) element with the content of the number.
// The key={index} attribute is used to provide a unique key for each list item, which helps React efficiently update the virtual DOM.
// When you run this component, it will display a simple list of numbers:

// List of Numbers:
// - 1
// - 2
// - 3
// - 4
// - 5
