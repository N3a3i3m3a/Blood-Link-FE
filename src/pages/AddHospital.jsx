import React, { useState } from 'react';
import axios from 'axios';

const AddHospital = () => {
  const [newHospital, setNewHospital] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalCode: '',
    province: '',
    district: '',
    sector: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHospital((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://blood-link-be.onrender.com/api/hospital/add', newHospital);
      setNewHospital({
        name: '',
        email: '',
        phone: '',
        hospitalCode: '',
        province: '',
        district: '',
        sector: '',
      });
      setSuccess('Hospital added successfully');
      setError(null);
    } catch (err) {
      console.error('Error adding hospital:', err);
      if (err.response) {
        setError(err.response.data.message || 'An error occurred while adding the hospital.');
      } else {
        setError('An error occurred while adding the hospital.');
      }
      setSuccess(null);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Add New Hospital</h1>

      {error && <div className="text-center text-red-500 mt-4">Error: {error}</div>}
      {success && <div className="text-center text-green-500 mt-4">{success}</div>}

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newHospital.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-sm w-full"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={newHospital.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-sm w-full"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={newHospital.phone}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-sm w-full"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Hospital Code</label>
            <input
              type="text"
              name="hospitalCode"
              value={newHospital.hospitalCode}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-sm w-full"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Province</label>
            <input
              type="text"
              name="province"
              value={newHospital.province}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-sm w-full"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">District</label>
            <input
              type="text"
              name="district"
              value={newHospital.district}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-sm w-full"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Sector</label>
            <input
              type="text"
              name="sector"
              value={newHospital.sector}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-sm w-full"
              required
            />
          </div>
          <div className="col-span-full flex justify-center">
            <button
              type="submit"
              className="py-2 px-4 bg-red-500 text-white rounded-md text-sm hover:bg-blue-600 max-w-xs w-full"
            >
              Add Hospital
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHospital;
