import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

function StatePicker({ selectedValue, onChange }) {
    const [states, setStates] = useState([]);

    useEffect(() => {
        fetchStates();
    }, []);

    const fetchStates = async () => {
        try {
            const response = await axios.get('http://localhost:5006/api/states');
            console.log("states :", response.data.states);
            setStates(response.data.states);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const optionsStates = states.map((state) => ({
        value: state,
        label: state
    }));

    return (
        <div  style={{ marginTop: 10 }}>            
            <Select
                placeholder="Select a state..."
                value={selectedValue}
                onChange={onChange}
                options={optionsStates}
               
            />
        </div>
    );
}

export default StatePicker;
