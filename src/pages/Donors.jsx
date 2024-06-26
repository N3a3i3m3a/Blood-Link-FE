import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDonor, setSelectedDonor] = useState(null);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('https://blood-link-be.onrender.com/api/donor/getAllDonor');
      if (response.data && Array.isArray(response.data.appointments)) {
        setDonors(response.data.appointments);
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
      await axios.delete(`https://blood-link-be.onrender.com/api/donor/deleteDonor/${id}`);
      setDonors(donors.filter(donor => donor._id !== id)); // Update the state to remove the deleted donor
    } catch (error) {
      console.error("Error deleting donor:", error);
    }
  };

  const handleUpdate = (donor) => {
    setSelectedDonor(donor);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://blood-link-be.onrender.com/api/donor/updateDonor/${selectedDonor._id}`, {
        fullName: selectedDonor.fullName,
        nationalID: selectedDonor.nationalID,
        bloodGroup: selectedDonor.bloodGroup,
        mobileNumber: selectedDonor.mobileNumber,
        province: selectedDonor.province,
        district: selectedDonor.district,
        sector: selectedDonor.sector,
        createdAt: selectedDonor.createdAt,
        age: selectedDonor.age,
        weight: selectedDonor.weight,
        gender: selectedDonor.gender,
        email: selectedDonor.email,
        lastDonationDate: selectedDonor.lastDonationDate
      });
      console.log("Update response:", response.data);
      fetchDonors(); 
      setSelectedDonor(null); 
    } catch (error) {
      console.error("Error updating donor:", error.response ? error.response.data : error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedDonor({ ...selectedDonor, [name]: value });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading donors: {error.message}</p>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Donors List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {donors.map(donor => (
          <div key={donor._id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">{donor.fullName}</h2>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Blood Type:</span> {donor.bloodGroup}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Contact:</span> {donor.mobileNumber}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {donor.email}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">National ID:</span> {donor.nationalID}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Province:</span> {donor.province}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">District:</span> {donor.district}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Sector:</span> {donor.sector}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Age:</span> {donor.age}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Weight:</span> {donor.weight}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Gender:</span> {donor.gender}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Registration Date:</span> {new Date(donor.createdAt).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Last Donation Date:</span> {donor.lastDonationDate ? new Date(donor.lastDonationDate).toLocaleDateString() : 'N/A'}</p>
            <div className="flex justify-end">
              <button 
                className='bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-700' 
                onClick={() => handleUpdate(donor)}
                style={{ marginRight: '10px' }}
              >
                Update
              </button>
              <button 
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700" 
                onClick={() => handleDelete(donor._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedDonor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update Donor</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={selectedDonor.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bloodGroup" className="block text-gray-700">Blood Type</label>
                <input
                  type="text"
                  id="bloodGroup"
                  name="bloodGroup"
                  value={selectedDonor.bloodGroup}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobileNumber" className="block text-gray-700">Contact</label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={selectedDonor.mobileNumber}
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
                  value={selectedDonor.province}
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
                  value={selectedDonor.district}
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
                  value={selectedDonor.sector}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={selectedDonor.age}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="weight" className="block text-gray-700">Weight</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={selectedDonor.weight}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700">Gender</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={selectedDonor.gender}
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
                  value={selectedDonor.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastDonationDate" className="block text-gray-700">Last Donation Date</label>
                <input
                  type="date"
                  id="lastDonationDate"
                  name="lastDonationDate"
                  value={selectedDonor.lastDonationDate ? new Date(selectedDonor.lastDonationDate).toISOString().split('T')[0] : ''}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
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
                  onClick={() => setSelectedDonor(null)}
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

export default Donors;
