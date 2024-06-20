import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentDoners = () => {
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchConfirmedAppointments();
  }, []);

  const fetchConfirmedAppointments = async () => {
    try {
      const response = await axios.get('https://blood-link-be.onrender.com/api/appointment/getComfirmedAppointments');
      setConfirmedAppointments(response.data.confirmedAppointments);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading confirmed appointments: {error.message}</p>;

  return (
    <section className="p-10">
      <h1 className="text-2xl font-bold mb-4">Confirmed Appointments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {confirmedAppointments.map(appointment => (
              <tr key={appointment._id}>
                <td className="px-10 py-4 whitespace-nowrap" data-label="Donor">
                  <div>
                    <p><strong>Name:</strong> {appointment.donor.fullName}</p>
                    <p><strong>Mobile Number:</strong> {appointment.donor.mobileNumber}</p>
                    <p><strong>National ID:</strong> {appointment.donor.nationalID}</p>
                    <p><strong>Email:</strong> {appointment.donor.email}</p>
                    <p><strong>Blood Group:</strong> {appointment.donor.bloodGroup}</p>
                  </div>
                </td>
                <td className="px-10 py-4 whitespace-nowrap" data-label="Hospital">
                  <div>
                    <p><strong>Name:</strong> {appointment.hospital ? appointment.hospital.name : 'No hospital name assigned'}</p>
                    <p><strong>Email:</strong> {appointment.hospital ? appointment.hospital.email : 'No hospital email assigned'}</p>
                    <p><strong>Phone:</strong> {appointment.hospital ? appointment.hospital.phone : 'No hospital phone assigned'}</p>
                  </div>
                </td>
                <td className="px-10 py-4 whitespace-nowrap" data-label="Date">{new Date(appointment.date).toLocaleDateString()}</td>
                <td className="px-10 py-4 whitespace-nowrap" data-label="Time">{appointment.time}</td>
                <td className="px-10 py-4 whitespace-nowrap" data-label="Location">
                  <div>
                    <p><strong>Sector:</strong> {appointment.hospital?.sector}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentDoners;
