import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://blood-link-be.onrender.com/api/hospital/listOfBloodRequest')
      .then(response => {
        setRequests(response.data.allRequests);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching requests:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Request List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Emergency Blood Type</th>
            <th className="py-2 px-4 border-b">Hospital Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Province</th>
            <th className="py-2 px-4 border-b">District</th>
            <th className="py-2 px-4 border-b">Sector</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request._id}>
              <td className="py-2 px-4 border-b">{request.emergencyBloodType}</td>
              <td className="py-2 px-4 border-b">{request.hospital.name}</td>
              <td className="py-2 px-4 border-b">{request.hospital.email}</td>
              <td className="py-2 px-4 border-b">{request.hospital.phone}</td>
              <td className="py-2 px-4 border-b">{request.hospital.province}</td>
              <td className="py-2 px-4 border-b">{request.hospital.district}</td>
              <td className="py-2 px-4 border-b">{request.hospital.sector}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;
