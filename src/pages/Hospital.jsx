import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>List of Hospitals</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Hospital Code</th>
            <th>Province</th>
            <th>District</th>
            <th>Sector</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(hospitals) && hospitals.length > 0 ? (
            hospitals.map((hospital) => (
              <tr key={hospital._id}>
                <td>{hospital._id}</td>
                <td>{hospital.name}</td>
                <td>{hospital.email}</td>
                <td>{hospital.phone}</td>
                <td>{hospital.hospitalCode}</td>
                <td>{hospital.province}</td>
                <td>{hospital.district}</td>
                <td>{hospital.sector}</td>
                <td>{hospital.role}</td>
                <td>{hospital.status}</td>
                <td>{new Date(hospital.createdAt).toLocaleString()}</td>
                <td>{new Date(hospital.updatedAt).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12">No hospitals found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Hospital;
