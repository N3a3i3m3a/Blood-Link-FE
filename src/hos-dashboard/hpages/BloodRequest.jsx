import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BloodRequest = () => {
    const [requests, setRequests] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const hospitalId = localStorage.getItem("hospitalId");

                if (!hospitalId) {
                    setError("No hospital ID found in local storage.");
                    return;
                }

                const response = await axios.get(`https://blood-link-be.onrender.com/api/hospital/onehospitalRequests/${hospitalId}`);
                setRequests(response.data.requests);
            } catch (err) {
                console.error('Error fetching requests:', err);
                setError('Failed to fetch requests. Please try again later.');
            }
        };

        fetchRequests();
    }, []); 

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold mb-4 sm:mb-0">Our Blood Requests</h1>
                <Link to="/RequestBlood">
                    <button className="py-2 px-4 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">Request Blood</button>
                </Link>
            </div>
            
            {error && <div className="text-red-500">{error}</div>}
            {requests.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Blood Type</th>
                                <th className="py-2 px-4 border-b">Status</th>
                                <th className="py-2 px-4 border-b">Quantity</th>
                                <th className="py-2 px-4 border-b">Created At</th>
                                <th className="py-2 px-4 border-b">Updated At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(request => (
                                <tr key={request._id}>
                                    <td className="py-2 px-4 border-b">{request.emergencyBloodType}</td>
                                    <td className="py-2 px-4 border-b">{request.status}</td>
                                    <td className="py-2 px-4 border-b">{request.quantity}</td>
                                    <td className="py-2 px-4 border-b">{new Date(request.createdAt).toLocaleString()}</td>
                                    <td className="py-2 px-4 border-b">{new Date(request.updatedAt).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                !error && <p>Loading...</p>
            )}
        </div>
    );
};

export default BloodRequest;
