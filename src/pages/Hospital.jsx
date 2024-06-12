import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get('https://blood-link-be.onrender.com/api/hospital/list');
      if (response.data && response.data.all_hospitals) {
        setHospitals(response.data.all_hospitals);
      } else {
        throw new Error('API response is not in the expected format');
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://blood-link-be.onrender.com/api/hospital/delete/${id}`);
      setHospitals(hospitals.filter((hospital) => hospital._id !== id));
    } catch (error) {
      console.error('Error deleting hospital:', error);
    }
  };

  const handleUpdate = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://blood-link-be.onrender.com/api/hospital/update/${selectedHospital._id}`,
        {
          name: selectedHospital.name,
          email: selectedHospital.email,
          phone: selectedHospital.phone,
          hospitalCode: selectedHospital.hospitalCode,
          province: selectedHospital.province,
          district: selectedHospital.district,
          sector: selectedHospital.sector,
        }
      );
      console.log('Update response:', response.data);
      fetchHospitals();
      setSelectedHospital(null);
    } catch (error) {
      console.error('Error updating hospital:', error.response ? error.response.data : error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedHospital({ ...selectedHospital, [name]: value });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading hospitals: {error.message}</p>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-row justify-between my-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">List of Hospitals</h1>
        </div>
        <div>
          <Link to="/AddHospital">
            <button className="py-2 px-4 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">
              Add Hospital
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hospitals.map((hospital) => (
          <div key={hospital._id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">{hospital.name}</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">ID:</span> {hospital._id}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Email:</span> {hospital.email}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Phone:</span> {hospital.phone}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Hospital Code:</span> {hospital.hospitalCode}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Province:</span> {hospital.province}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">District:</span> {hospital.district}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Sector:</span> {hospital.sector}
            </p>
            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-700"
                onClick={() => handleUpdate(hospital)}
                style={{ marginRight: '10px' }}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700"
                onClick={() => handleDelete(hospital._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedHospital && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update Hospital</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={selectedHospital.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={selectedHospital.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={selectedHospital.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hospitalCode" className="block text-gray-700">Hospital Code</label>
                <input
                  type="text"
                  id="hospitalCode"
                  name="hospitalCode"
                  value={selectedHospital.hospitalCode}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="province" className="block text-gray-700">Province</label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={selectedHospital.province}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="district" className="block text-gray-700">District</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={selectedHospital.district}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sector" className="block text-gray-700">Sector</label>
                <input
                  type="text"
                  id="sector"
                  name="sector"
                  value={selectedHospital.sector}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-700"
                  onClick={() => setSelectedHospital(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hospital;
