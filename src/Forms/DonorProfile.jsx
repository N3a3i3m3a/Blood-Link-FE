import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { DonorContext } from './DonorContext';

const DonorProfile = () => {
  const { donorProfile, setDonorProfile } = useContext(DonorContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Added state for success message
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDonorProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Donor Data:', donorProfile);

    try {
      const response = await axios.post('https://blood-link-be.onrender.com/api/donor/create', donorProfile);
      console.log('Donor created successfully:', response.data);

      // Clear error messages after successful submission
      setErrorMessage('');
      setSuccessMessage('Donor created successfully!'); // Set success message
      
    } catch (error) {
      console.error('Error creating donor:', error.response ? error.response.data : error.message);

      if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        console.error('Headers:', error.response.headers);

        const errorData = error.response.data;

        if (errorData && errorData.error && errorData.error.includes('duplicate key error')) {
          setErrorMessage('This email is already registered. Please use a different email.');
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      } else if (error.request) {
        console.error('Request:', error.request);
        setErrorMessage('No response from the server. Please check your network connection.');
      } else {
        console.error('Error:', error.message);
        setErrorMessage('An unexpected error occurred. Please try again.');
      }

      setSuccessMessage(''); // Clear success message on error
    }
  };

  return (
    <section className='flex flex-col w-full items-center  bg-white p-20'>
      <div className='rounded max-w-3xl rounded flex flex-col  items-center justify-center mx-20 p-10 shadow-md'>
        <h1 className="text-2xl text-gray-500 font-bold">REGISTER TO DONATE ANY TIME</h1>
        <h2 className='my-1'>Please, fill in your details into this form</h2>
        <form className="flex flex-col gap-5 p-7 w-full items-center" onSubmit={handleSubmit}>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          {successMessage && <div className="text-green-500">{successMessage}</div>}
          <div className='w-full flex flex-wrap'>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={donorProfile.fullName}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-wrap gap-5'>
            <input
              type="text"
              id="mobileNumber"
              placeholder="Mobile Number"
              value={donorProfile.mobileNumber}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-wrap gap-5'>
            <input
              type="text"
              id="nationalID"
              placeholder="National ID"
              value={donorProfile.nationalID}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-wrap gap-5'>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={donorProfile.email}
              onChange={handleChange}
              className="flex-1 px-3 py-2 w-full rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-wrap gap-5'>
            <input
              type="text"
              id="province"
              placeholder="Province"
              value={donorProfile.province}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-row gap-5'>
            <input
              type="text"
              id="district"
              placeholder="District"
              value={donorProfile.district}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
            <input
              type="text"
              id="sector"
              placeholder="Sector"
              value={donorProfile.sector}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-row flex-wrap gap-5'>
            <input
              type="text"
              id="bloodGroup"
              placeholder="Blood Group"
              value={donorProfile.bloodGroup}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
            <input
              type="number"
              id="age"
              placeholder="Age"
              value={donorProfile.age}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
            <select
              id="gender"
              value={donorProfile.gender}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="number"
              id="weight"
              placeholder="Weight (kg)"
              value={donorProfile.weight}
              onChange={handleChange}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <button type="submit" className="ml-[10%] bg-red-600 mx-9 py-2 rounded-md text-white w-full">
            Donate
          </button>
          <h1 className='font-semibold'>You need to book appointment?<Link to='/BookAppointment' className='text-red-500'> Click here!</Link></h1>
        </form>
      </div>
    </section>
  );
};

export default DonorProfile;
