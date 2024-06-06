import React from 'react';

function SimpleList() {
  // Sample array of items
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div>
      <h3>List of Items:</h3>
      
      Array of Strings , items.map(item, index)
      
      {/* <ul> */}
        {/* Use the map function to iterate over the array and render each item */}
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      {/* </ul> */}
    </div>
  );
}

export default SimpleList;


// In this example:

// We have an array called items with some sample strings.
// Inside the ul element, we use the map function to iterate over the items array.
// For each item in the array, we render a li (list item) element with the content of the item.
// The key={index} attribute is used to provide a unique key for each list item, which helps React efficiently update the virtual DOM.
// When you run this component, it will display a simple list of items:

{/*List of Items:
- Item 1
- Item 2
- Item 3
- Item 4*/}
