// src/components/Requests.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://example.com/api/blood-requests');
        setRequests(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List of Existing Blood Requests</h1>
      {requests.length === 0 ? (
        <div>No blood requests found.</div>
      ) : (
        <div className="grid gap-4">
          {requests.map(request => (
            <div key={request.id} className="p-4 border rounded-lg shadow-md">
              <p><strong>Request ID:</strong> {request.id}</p>
              <p><strong>Blood Type:</strong> {request.blood_type}</p>
              <p><strong>Units Needed:</strong> {request.units_needed}</p>
              <p><strong>Requester:</strong> {request.requester_name}</p>
              <p><strong>Hospital:</strong> {request.hospital_name}</p>
              <p><strong>Date Needed:</strong> {request.date_needed}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Requests;
