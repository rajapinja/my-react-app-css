import React, { useState } from 'react';

function FormScreen() {
  // Define state variables for the form input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value state
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior, which would cause the page to refresh
    //This line calls the preventDefault() method on the event object passed to the function. 
    //This method prevents the default behavior of the form submission, which in this case would cause the entire page to refresh. 
    //By calling preventDefault(), we ensure that the form submission is handled entirely within our React component without causing a page reload
    console.log("Submitted value:", inputValue);
    // Here you can perform further actions like sending the form data to a server
  };

  return (
    <div>
      <h4>Form Submission</h4>      
      <form onSubmit={handleSubmit}>
        <div>useState, OnSubmit Event, inputValue</div>
        <div style={{ marginTop: 20 }}>
          <label>
            Enter something: 
            <input 
              type="text" 
              value={inputValue} 
              onChange={handleChange} 
            />
          </label>
          <div style={{ marginTop: 10 }}><button type="submit">Submit</button></div>
        </div> 
      </form>
    </div>
  );
}

export default FormScreen;
