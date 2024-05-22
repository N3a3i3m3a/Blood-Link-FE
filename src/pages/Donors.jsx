
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Donor = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('/api/donors'); // Adjust the URL to your API endpoint
      if (Array.isArray(response.data)) {
        setDonors(response.data);
      } else {
        throw new Error('API response is not an array');
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/donors/${id}`); // Adjust the URL to your API endpoint
      fetchDonors();
    } catch (error) {
      console.error("Error deleting donor:", error);
    }
  };

  const handleUpdate = (id) => {
    
    console.log(`Update donor with ID: ${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading donors: {error.message}</p>;

  return (
    <div>
      <h2>Donors List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Contact</th>
            <th>Last Donation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map(donor => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.bloodType}</td>
              <td>{donor.contact}</td>
              <td>{new Date(donor.lastDonationDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleUpdate(donor.id)}>Update</button>
                <button onClick={() => handleDelete(donor.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donor;
