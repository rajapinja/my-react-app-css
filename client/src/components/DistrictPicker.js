import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const DistrictPicker = ({ selectedValue, onChange, selectedState }) => {
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        if (selectedState) {
            fetchDistricts(selectedState);
        }
    }, [selectedState]);

    const fetchDistricts = async (selectedState) => {
        try {
            console.log("selectedState :", selectedState);
            const response = await axios.get('http://localhost:5006/api/districts', {
                params: { state_name: selectedState.value }
            });
            console.log("districts :", response.data.districts);
            setDistricts(response.data.districts);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const options = districts.map((district) => ({
        value: district,
        label: district
    }));

    return (
        <div   style={{ marginTop: 10 }}>
            
            <Select
                placeholder="Select a district..."
                value={selectedValue}
                onChange={onChange}
                options={options}
              
            />
        </div>
    );
};

export default DistrictPicker;







