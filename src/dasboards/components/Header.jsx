import React from 'react';
import axios from 'axios';

export default function Header() {
    const handleLogout = async () => {
        try {
            const response = await axios.post('https://blood-link-be.onrender.com/api/user/logout', {}, {
                withCredentials: true, // If the API requires cookies/auth tokens
            });
            if (response.status === 200) {
                // Assuming you want to redirect to the login page or home page after logout
                window.location.href = '/'; // Change to your desired route
            } else {
                console.error('Logout failed:', response);
            }
        } catch (error) {
            console.error('Error during logout:', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response:', error.response);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <div className="bg-white h-16 flex items-center border-b border-gray-200 px-4 xl:w-screen md:px-20 sm:px-6 md:px-8 lg:px-16 xl:px-48 w-full">
            <div className="ml-auto">
                <button 
                    className="py-2 mr-48 px-4 bg-black text-white rounded-md text-sm hover:bg-red-600"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
