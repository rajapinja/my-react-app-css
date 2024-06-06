import React, { useState, useEffect } from 'react';
import axios from 'axios';


const StatesComponent = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/states');
        setStates(response.data); // Assuming the response contains an array of state objects
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  return (
    <div>
      <h2>List of States</h2>
      <ul>
        {states.map((state) => (
          <li key={state.id}>{state.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StatesComponent;
