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
  const [BloodGroup, setBloodGroup] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [donationAvailability, setDonationAvailability] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donorData = {
      fullName,
      mobileNumber,
      nationalID,
      email,
      province,
      district,
      sector,
      bloodGroup: BloodGroup,
      age,
      gender,
      weight,
      donationAvailability,
    };

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
    } catch (error) {
      console.error('Error creating donor:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <section className='h-fit flex flex-col mt-1 items-center ml-20 justify-center bg-white p-8 shadow-md'>
      <div className='rounded'>
        <h1 className="text-2xl text-gray-500 font-bold">CREATE YOUR PROFILE</h1>
        <h2 className='my-1'>Please fill in your details into this form</h2>
        <form className="flex flex-col gap-5 p-7 w-full items-center" onSubmit={handleSubmit}>
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
              id="BloodGroup"
              placeholder="Blood Group"
              value={BloodGroup}
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
              <option value="other">Other</option>
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
