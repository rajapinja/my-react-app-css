import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

function MyParentComponent() {
  const childRef = useRef();

  const handleClick = () => {
    // Call a method on the child component
    childRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Focus Child</button>
    </div>
  );
}

export default MyParentComponent;