import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BloodRequest() {
    const [hospitalID, setHospitalID] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [bloodAmount, setBloodAmount] = useState('');
    const [responseMessage, setResponseMessage] = useState(null);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await axios.get('https://blood-link-be.onrender.com/api/hospital/requests');
            setRequests(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching requests:', error);
            setError(error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Clear previous response message
        setResponseMessage(null);

        try {
            const response = await axios.post('https://blood-link-be.onrender.com/api/hospital/bloodRequest', {
                hospitalID,
                bloodGroup,
                bloodAmount
            });

            if (response.status === 200) {
                setResponseMessage('Request submitted successfully!');
                fetchRequests(); // Refresh the list of requests after submitting a new one
            } else {
                setResponseMessage('Failed to submit request. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            setResponseMessage('An error occurred. Please try again.');
        }

        // Clear the form fields
        setHospitalID('');
        setBloodGroup('');
        setBloodAmount('');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md">
            <h2 className="text-xl font-bold mb-4">Blood Request Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="hospitalID" className="block text-gray-700">Hospital ID</label>
                    <input
                        type="text"
                        id="hospitalID"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={hospitalID}
                        onChange={(e) => setHospitalID(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="bloodGroup" className="block text-gray-700">Blood Group</label>
                    <input
                        type="text"
                        id="bloodGroup"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="bloodAmount" className="block text-gray-700">Amount of Blood Needed</label>
                    <input
                        type="number"
                        id="bloodAmount"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={bloodAmount}
                        onChange={(e) => setBloodAmount(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Request Blood
                </button>
            </form>
            {responseMessage && (
                <p className="mt-4 text-center text-sm text-gray-700">
                    {responseMessage}
                </p>
            )}
            <h2 className="text-xl font-bold mt-8 mb-4">Existing Blood Requests</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error loading requests: {error.message}</p>}
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Hospital ID</th>
                        <th className="py-2">Blood Group</th>
                        <th className="py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{request.hospitalID}</td>
                            <td className="border px-4 py-2">{request.bloodGroup}</td>
                            <td className="border px-4 py-2">{request.bloodAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
