import React, { useState } from 'react';
import axios from 'axios';

const DonorProfile = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [nationalID, setNationalID] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [sector, setSector] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [donationAvailability, setDonationAvailability] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For displaying errors to the user

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Log to confirm form submission
    const donorData = {
      fullName,
      mobileNumber,
      nationalID,
      email,
      province,
      district,
      sector,
      bloodGroup,
      age,
      gender,
      weight,
      donationAvailability,
    };

    console.log('Donor Data:', donorData); // Log the data to be sent

    try {
      const response = await axios.post('https://blood-link-be.onrender.com/api/donor/create', donorData);
      console.log('Donor created successfully:', response.data);
      // Optionally, reset the form after successful submission
      setFullName('');
      setMobileNumber('');
      setNationalID('');
      setEmail('');
      setProvince('');
      setDistrict('');
      setSector('');
      setBloodGroup('');
      setAge('');
      setGender('');
      setWeight('');
      setDonationAvailability('');
      setErrorMessage(''); // Clear any previous error messages
    } catch (error) {
      console.error('Error creating donor:', error.response ? error.response.data : error.message);
      // Detailed logging
      if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        console.error('Headers:', error.response.headers);
        if (error.response.data && error.response.data.error.includes('duplicate key error')) {
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
    }
  };

  return (
    <section className='h-fit flex flex-col mt-1 items-center ml-20 justify-center bg-white p-8 shadow-md'>
      <div className='rounded'>
        <h1 className="text-2xl text-gray-500 font-bold">CREATE YOUR PROFILE</h1>
        <h2 className='my-1'>Please fill in your details into this form</h2>
        <form className="flex flex-col gap-5 p-7 w-full items-center" onSubmit={handleSubmit}>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div className='w-full flex flex-wrap'>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-wrap gap-5'>
            <input
              type="text"
              id="mobileNumber"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-wrap gap-5'>
            <input
              type="text"
              id="nationalID"
              placeholder="National ID"
              value={nationalID}
              onChange={(e) => setNationalID(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-wrap gap-5'>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 w-full rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-wrap gap-5'>
            <input
              type="text"
              id="province"
              placeholder="Province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-row gap-5'>
            <input
              type="text"
              id="district"
              placeholder="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
            <input
              type="text"
              id="sector"
              placeholder="Sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <div className='w-full flex flex-row flex-wrap gap-5'>
            <input
              type="text"
              id="bloodGroup"
              placeholder="Blood Group"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
            <input
              type="number"
              id="age"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-gray-400"
              required
            />
          </div>
          <button type="submit" className="ml-[10%] bg-red-600 mx-9 py-2 rounded-md text-white w-full">
            Donate 
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonorProfile;
