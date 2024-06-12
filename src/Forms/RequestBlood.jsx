import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestBlood = () => {
  const [emergencyBloodType, setEmergencyBloodType] = useState('');
  const [hospital, setHospital] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const hospitalId = localStorage.getItem("hospitalId");
    if (hospitalId) {
      setHospital(hospitalId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const requestData = {
      emergencyBloodType,
      hospital,
      quantity: parseInt(quantity, 10) // Ensure quantity is an integer
    };

    try {
      const response = await axios.post('https://blood-link-be.onrender.com/api/hospital/bloodRequest', requestData);
      console.log('Request successful:', response.data);
      setSuccessMessage('Blood request submitted successfully!');
      setError(null);
    } catch (err) {
      console.error('Error submitting request:', err);
      setError('Failed to submit blood request. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <section className='h-fit flex flex-col items-center mx-20 justify-center bg-white p-8 shadow-md'>
      <div className='rounded'>
        <h1 className="text-2xl text-gray-500 font-bold">REQUEST BLOOD</h1>
        <h2 className='my-3'>Please enter the details for the blood request</h2>
        <form className="flex flex-col gap-5 p-7 w-full items-center" onSubmit={handleSubmit}>
          <div className='w-full'>
            <input
              type="text"
              id="bloodType"
              placeholder="Enter Blood Type"
              value={emergencyBloodType}
              onChange={(e) => setEmergencyBloodType(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <div className='w-full'>
            <input
              type="text"
              id="hospital"
              placeholder="Enter Hospital Name"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
              readOnly // Make the input read-only to prevent user modification
            />
          </div>
          <div className='w-full'>
            <input
              type="number"
              id="quantity"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <button type="submit" className="ml-[10%] bg-red-600 mx-9 py-2 rounded-md text-white w-full">
            Request Blood
          </button>
        </form>
        {error && <div className="text-red-500 mt-3">{error}</div>}
        {successMessage && <div className="text-green-500 mt-3">{successMessage}</div>}
      </div>
    </section>
  );
};

export default RequestBlood;
