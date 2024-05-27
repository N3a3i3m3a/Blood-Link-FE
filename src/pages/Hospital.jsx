import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newHospital, setNewHospital] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalCode: '',
    province: '',
    district: '',
    sector: '',
    role: '',
    status: '',
  });

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('https://blood-link-be.onrender.com/api/hospital/list');
        console.log('API response:', response.data); // Log the response data
        if (response.data && response.data.all_hospitals) {
          setHospitals(response.data.all_hospitals);
        } else {
          setError('Invalid data format');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err); // Log the error
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

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
      const response = await axios.post('https://blood-link-be.onrender.com/api/hospital/add', newHospital);
      setHospitals([...hospitals, response.data]);
      setNewHospital({
        name: '',
        email: '',
        phone: '',
        hospitalCode: '',
        province: '',
        district: '',
        sector: '',
        role: '',
        status: '',
      });
    } catch (err) {
      console.error('Error adding hospital:', err); // Log the error
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://blood-link-be.onrender.com/api/hospital/delete/${id}`);
      setHospitals(hospitals.filter(hospital => hospital._id !== id)); // Update the state to remove the deleted hospital
    } catch (error) {
      console.error("Error deleting hospital:", error);
    }
  };

  const handleUpdate = (id) => {
    // Handle update functionality here
    console.log('Update hospital with ID:', id);
  };

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-4">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">List of Hospitals</h1>

      {/* Add New Hospital Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Hospital</h2>
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
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              name="role"
              value={newHospital.role}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-sm w-full"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <input
              type="text"
              name="status"
              value={newHospital.status}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-sm w-full"
              required
            />
          </div>
          <div className="col-span-full flex justify-center">
            <button
              type="submit"
              className="
              py-2 px-4 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 max-w-xs w-full"
              >
                Add Hospital
              </button>
            </div>
          </form>
        </div>
  
        {/* Hospitals List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(hospitals) && hospitals.length > 0 ? (
            hospitals.map((hospital) => (
              <div key={hospital._id} className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">{hospital.name}</h2>
                <p className="text-gray-700 text-sm"><strong>ID:</strong> {hospital._id}</p>
                <p className="text-gray-700 text-sm"><strong>Email:</strong> {hospital.email}</p>
                <p className="text-gray-700 text-sm"><strong>Phone:</strong> {hospital.phone}</p>
                <p className="text-gray-700 text-sm"><strong>Hospital Code:</strong> {hospital.hospitalCode}</p>
                <p className="text-gray-700 text-sm"><strong>Province:</strong> {hospital.province}</p>
                <p className="text-gray-700 text-sm"><strong>District:</strong> {hospital.district}</p>
                <p className="text-gray-700 text-sm"><strong>Sector:</strong> {hospital.sector}</p>
                <p className="text-gray-700 text-sm"><strong>Role:</strong> {hospital.role}</p>
                <p className="text-gray-700 text-sm"><strong>Status:</strong> {hospital.status}</p>
                <p className="text-gray-700 text-sm"><strong>Created At:</strong> {new Date(hospital.createdAt).toLocaleString()}</p>
                <p className="text-gray-700 text-sm"><strong>Updated At:</strong> {new Date(hospital.updatedAt).toLocaleString()}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="py-2 px-4 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
                    onClick={() => handleUpdate(hospital._id)}
                  >
                    Update
                  </button>
                  <button
                    className="py-2 px-4 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                    onClick={() => handleDelete(hospital._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-4">No hospitals found.</div>
          )}
        </div>
      </div>
    );
  };
  
  export default Hospital;
  