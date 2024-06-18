import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    const [hospital, setHospital] = useState(null);
    const [error, setError] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const fetchHospitalDetails = async () => {
            try {
                const hospitalId = localStorage.getItem("hospitalId");
                if (!hospitalId) {
                    throw new Error("No hospital ID found in local storage.");
                }

                const response = await axios.get(`https://blood-link-be.onrender.com/api/hospital/getHospital/${hospitalId}`);
                setHospital(response.data.check);
            } catch (err) {
                setError(err.message || 'Error fetching hospital details.');
            }
        };

        fetchHospitalDetails();
    }, []);

    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    };

    if (error) {
        return (
            <div className="bg-white h-16 flex items-center border-b border-gray-200 w-screen px-4 sm:px-6 lg:pl-60">
                <div className="w-full">
                    <h2 className="text-center sm:text-left text-base sm:text-lg lg:text-xl font-semibold text-red-500">
                        {error}
                    </h2>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border-b border-gray-200  px-4 sm:px-6 lg:pl-60">
            <div className="flex items-center justify-between h-16 pr-80">
                <h2 className="text-black sm:text-lg lg:text-xl font-semibold">
                    {hospital ? `Welcome, ${hospital.name}` : 'Loading hospital details...'}
                </h2>
                {hospital && (
                    <button 
                        onClick={handleShowDetails} 
                        className="ml-4  py-1 px-3 bg-red-400 text-white rounded-md text-lg hover:bg-blue-600">
                        {showDetails ? 'Hide Details' : 'More details'}
                    </button>
                )}
            </div>
            {showDetails && hospital && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md shadow-md">
                    <p><strong>Name:</strong> {hospital.name}</p>
                    <p><strong>Email:</strong> {hospital.email}</p>
                    <p><strong>Phone:</strong> {hospital.phone}</p>
                    <p><strong>Hospital Code:</strong> {hospital.hospitalCode}</p>
                    <p><strong>Province:</strong> {hospital.province}</p>
                    <p><strong>District:</strong> {hospital.district}</p>
                    <p><strong>Sector:</strong> {hospital.sector}</p>
                </div>
            )}
        </div>
    );
}

export default Header;
