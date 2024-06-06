import React, { useState, useEffect } from 'react';

function TimerUseEffect() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once after initial render

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default TimerUseEffect;

// useEffect:
// Performs side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
// Runs after every render by default, but can be configured to run only when certain values have changed.
