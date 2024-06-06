import React from 'react';

const data = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const ComponentWithSpread = () => {
  // Spread operator used to pass props to child component
  return <ChildComponent {...data} />;
};

const ChildComponent = ({ name, age, city }) => {
  return (
    <div>
      <h4>Spread Opererator ...</h4>
      Spread operator used to pass props to child component
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default ComponentWithSpread;
