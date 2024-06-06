import React, { useState } from 'react';

const YearMonthSelect = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() + index); // Generate 10 years starting from the current year
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedYear(selectedYear);
  };

  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setSelectedMonth(selectedMonth);
  };

  return (
    <div>
      <h4>Dependency Drop-down demo</h4>
      <p> - If you select a year, it auto populate-months drop-down list</p>
      <label htmlFor="year">Year:</label>
      <select id="year" value={selectedYear} onChange={handleYearChange}>
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <label htmlFor="month">Month:</label>
      <select id="month" value={selectedMonth} onChange={handleMonthChange} disabled={!selectedYear}>
        <option value="">Select Month</option>
        {months.map((month) => (
          <option key={month.value} value={month.value}>{month.label}</option>
        ))}
      </select>
    </div>
  );
};

export default YearMonthSelect;
