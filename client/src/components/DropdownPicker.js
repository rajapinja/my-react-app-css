import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' }
];

const DropdownPicker = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption.value);
  };

  return (
    <>
    <h4>Drop-down Picker</h4>
    <p> - npm install react-select</p>
    <p> - define options array object with value and label</p>
    <p> - include Select tag</p>
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
    </>
    
  );
};

export default DropdownPicker;

//npm install react-select - should install package

