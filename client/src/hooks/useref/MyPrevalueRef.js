import React, { useRef, useEffect } from 'react';

function MyPrevalueRef({ value }) {
  const prevValueRef = useRef();
  
  useEffect(() => {
    // Store the previous value whenever the value prop changes
    prevValueRef.current = value;
  }, [value]);

  return <div>Previous value: {prevValueRef.current}</div>;
}

export default MyPrevalueRef;