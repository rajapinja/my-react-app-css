import React from 'react';

const handleClick = () => {
  console.log('Div clicked');
};

const DivComponentClick = () => {
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      Click me
    </div>
  );
};

export default DivComponentClick;
