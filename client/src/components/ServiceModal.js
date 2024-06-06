import React, { useState } from 'react';
import Modal from 'react-modal';

const ServiceModal = ({ isOpen, onRequestClose }) => {
  const [serviceName, setServiceName] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [town, setTown] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the details here
    console.log("Service Name:", serviceName);
    console.log("Name:", name);
    console.log("Mobile Number:", mobileNumber);
    console.log("Town:", town);
    // You can perform further actions like submitting the data to a server
    // Reset the form
    setServiceName('');
    setName('');
    setMobileNumber('');
    setTown('');
    // Close the modal
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service Name:</label>
          <input type="text" value={serviceName} onChange={(e) => setServiceName(e.target.value)} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
        </div>
        <div>
          <label>Town:</label>
          <select value={town} onChange={(e) => setTown(e.target.value)} required>
            <option value="">Select Town</option>
            <option value="Town 1">Town 1</option>
            <option value="Town 2">Town 2</option>
            <option value="Town 3">Town 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ServiceModal;
