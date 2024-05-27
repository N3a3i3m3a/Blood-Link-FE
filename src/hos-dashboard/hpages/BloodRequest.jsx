import React, { useState } from 'react';
import axios from 'axios';

export default function BloodRequest() {
    const [hospital, setHospital] = useState('');
    const [emergencyBloodType, setEmergencyBloodType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [responseMessage, setResponseMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Clear previous response message
        setResponseMessage(null);

        try {
            const response = await axios.post('https://blood-link-be.onrender.com/api/hospital/bloodRequest', {
                hospital,
                emergencyBloodType,
                quantity
            });

            if (response.status === 200) {
                setResponseMessage('Request submitted successfully!');
            } else {
                setResponseMessage('Failed to submit request. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            setResponseMessage('An error occurred. Please try again.');
        }

        // Clear the form fields
        setHospital('');
        setEmergencyBloodType('');
        setQuantity('');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md">
            <h2 className="text-xl font-bold mb-4">Blood Request Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="hospital" className="block text-gray-700">Hospital</label>
                    <input
                        type="text"
                        id="hospital"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="emergencyBloodType" className="block text-gray-700">Emergency Blood Type</label>
                    <input
                        type="text"
                        id="emergencyBloodType"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={emergencyBloodType}
                        onChange={(e) => setEmergencyBloodType(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
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
        </div>
    );
}
