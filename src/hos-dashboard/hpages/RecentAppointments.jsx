import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const hospitalId = localStorage.getItem("hospitalId");

                if (!hospitalId) {
                    setError("No hospital ID found in local storage.");
                    return;
                }

                const response = await axios.get(`https://blood-link-be.onrender.com/api/appointment/getAppointmentsOfAHospital/${hospitalId}`);
                setAppointments(response.data.appointments);
            } catch (err) {
                console.error('Error fetching appointments:', err);
                setError('Failed to fetch appointments. Please try again later.');
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">Recent Appointments</h1>
            {error && <div className="text-red-500">{error}</div>}
            {appointments.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Donor</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Time</th>
                            <th className="py-2 px-4 border-b">Date</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Blood Type</th>
                            <th className="py-2 px-4 border-b">Age</th>
                            <th className="py-2 px-4 border-b">Weight</th>
                            <th className="py-2 px-4 border-b">Created At</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => (
                            <tr key={appointment._id}>
                                <td className="py-2 px-4 border-b">{appointment.donor.fullName}</td>
                                <td className="py-2 px-4 border-b">{appointment.status}</td>
                                <td className="py-2 px-4 border-b">{appointment.time}</td>
                                <td className="py-2 px-4 border-b">{new Date(appointment.date).toLocaleString()}</td>
                                <td className="py-2 px-4 border-b">{appointment.donor.email}</td>
                                <td className="py-2 px-4 border-b">{appointment.donor.bloodGroup}</td>
                                <td className="py-2 px-4 border-b">{appointment.donor.age}</td>
                                <td className="py-2 px-4 border-b">{appointment.donor.weight}</td>
                                <td className="py-2 px-4 border-b">{new Date(appointment.createdAt).toLocaleString()}</td>
                        
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !error && <p>Loading...</p>
            )}
        </div>
    );
};

export default RecentAppointments;
