import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  return (
    <div>
      <h4>DatePicker</h4>
      <p> - npm install react-datepicker</p>
      <p> - import as DatePicker, and datepicker.css</p>
      <p> - additionally  set dateFormat </p>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Adjust the date format as needed
      />
    </div>
  );
};

export default DatePickerComponent;

//npm install react-datepicker - installable package
