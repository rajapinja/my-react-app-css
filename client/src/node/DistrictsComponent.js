import React, { useState, useEffect } from 'react';

const DistrictsComponent = () => {
  const [state, setState] = useState('');
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // Fetch districts when the component mounts
    fetchDistricts();
  }, []);

  const fetchDistricts = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/districts/${state}`);
      if (!response.ok) {
        throw new Error('Failed to fetch districts');
      }
      const data = await response.json();
      setDistricts(data);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  return (
    <div>
      <h2>Fetch Districts</h2>
      <label htmlFor="state">Select State:</label>
      <input
        type="text"
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={fetchDistricts}>Fetch Districts</button>
      
      <h3>Districts:</h3>
      <ul>
        {districts.map((district) => (
          <li key={district.id}>{district.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DistrictsComponent;
