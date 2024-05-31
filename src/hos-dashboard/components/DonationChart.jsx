import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HospitalChart = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            const hospitalId = localStorage.getItem("id");

            if (!hospitalId) {
                setError("No hospital ID found in local storage.");
                return;
            }

            try {
                const response = await axios.get(`https://blood-link-be.onrender.com/api/appointment/getAppointmentsOfAHospital/${hospitalId}`);
                setAppointments(response.data.appointments);
                console.log(response.data)
            } catch (err) {
                console.error('Error fetching appointments:', err);
                setError('Failed to fetch appointments. Please try again later.');
            }
        };

        fetchAppointments();
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">Donor Full Names</h1>
         
            {error && <div className="text-red-500">{error}</div>}
            <ul className="list-disc pl-5">
                {appointments.length > 0 ? (
                    appointments.map((appointments) => (
                        <li key={hospital._id} className="mb-2">
                            {appointments.fullName}
                        </li>
                    ))
                ) : (
                    !error && <p>Loading...</p>
                )}
            </ul>
        </div>
    );
};

export default HospitalChart;
