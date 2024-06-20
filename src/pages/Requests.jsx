import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://blood-link-be.onrender.com/api/hospital/listOfBloodRequest')
      .then(response => {
        // Ensure response.data.Requests is an array, even if it's empty
        setRequests(response.data.Requests || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching requests:', error);
        setLoading(false);
      });
  }, []);

  // const handleDelete = (id) => {
  //   // Implement delete functionality here
  //   console.log('Delete request with ID:', id);
  // };

  // const handleApprove = (id) => {
  //   // Implement approve functionality here
  //   console.log('Approve request with ID:', id);
  // };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Request List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {requests.length > 0 ? (
          requests.map(request => (
            <div key={request._id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">{request.emergencyBloodType}</h2>
              {request.hospital ? (
                <>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">Hospital Name:</span> {request.hospital.name}</p>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {request.hospital.email}</p>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">Phone:</span> {request.hospital.phone}</p>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">Province:</span> {request.hospital.province}</p>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">District:</span> {request.hospital.district}</p>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">Sector:</span> {request.hospital.sector}</p>
                </>
              ) : (
                <p className="text-gray-600 mb-2"><span className="font-semibold">Hospital Details:</span> Not available</p>
              )}
              {/* <div className="flex justify-end">
                <button onClick={() => handleApprove(request._id)} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Approve</button>
                <button onClick={() => handleDelete(request._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
              </div> */}
            </div>
          ))
        ) : (
          <p className="text-center">No requests found.</p>
        )}
      </div>
    </div>
  );
};

export default Requests;
