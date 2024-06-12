import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const hospitalId = localStorage.getItem("hospitalId");

                if (!hospitalId) {
                    throw new Error("No hospital ID found in local storage.");
                }

                const [appointmentsResponse, requestsResponse] = await Promise.all([
                    axios.get(`https://blood-link-be.onrender.com/api/appointment/getAppointmentsOfAHospital/${hospitalId}`),
                    axios.get(`https://blood-link-be.onrender.com/api/hospital/onehospitalRequests/${hospitalId}`)
                ]);

                setAppointments(appointmentsResponse.data.appointments);
                setRequests(requestsResponse.data.requests);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    const bloodTypes = {
        'A-': 'rgba(255, 99, 132, 0.6)',
        'A+': 'rgba(54, 162, 235, 0.6)',
        'B-': 'rgba(255, 206, 86, 0.6)',
        'B+': 'rgba(75, 192, 192, 0.6)',
        'AB-': 'rgba(153, 102, 255, 0.6)',
        'AB+': 'rgba(255, 159, 64, 0.6)',
        'O-': 'rgba(255, 99, 132, 0.6)',
        'O+': 'rgba(54, 162, 235, 0.6)',
    };

    const appointmentChartData = {
        labels: appointments.map(appointment => new Date(appointment.date).toLocaleDateString()),
        datasets: Object.values(appointments.reduce((acc, appointment) => {
            const date = new Date(appointment.date).toLocaleDateString();
            const bloodGroup = appointment.donor.bloodGroup;
            if (!acc[date]) {
                acc[date] = { [bloodGroup]: 1 };
            } else {
                if (!acc[date][bloodGroup]) {
                    acc[date][bloodGroup] = 1;
                } else {
                    acc[date][bloodGroup]++;
                }
            }
            return acc;
        }, {})).map(data => ({
            label: Object.keys(data).join(', '),
            data: Object.values(data),
            backgroundColor: Object.keys(data).map(type => bloodTypes[type]),
        })),
    };

    const requestChartData = {
        labels: requests.map(request => new Date(request.createdAt).toLocaleDateString()),
        datasets: Object.values(requests.reduce((acc, request) => {
            const date = new Date(request.createdAt).toLocaleDateString();
            const bloodType = request.emergencyBloodType;
            if (!acc[date]) {
                acc[date] = { [bloodType]: request.quantity };
            } else {
                if (!acc[date][bloodType]) {
                    acc[date][bloodType] = request.quantity;
                } else {
                    acc[date][bloodType] += request.quantity;
                }
            }
            return acc;
        }, {})).map(data => ({
            label: Object.keys(data).join(', '),
            data: Object.values(data),
            backgroundColor: Object.keys(data).map(type => bloodTypes[type]),
        })),
    };

    const legendOpts = {
        display: true,
        position: 'bottom',
        labels: {
            generateLabels: function(chart) {
                return Object.keys(bloodTypes).map(function(bloodType) {
                    return {
                        text: bloodType,
                        fillStyle: bloodTypes[bloodType],
                        strokeStyle: bloodTypes[bloodType],
                        lineWidth: 1,
                        hidden: false,
                        index: bloodType
                    };
                });
            }
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Recent Appointments</h2>
                {appointments.length > 0 ? <Bar data={appointmentChartData} options={{ plugins: { legend: legendOpts } }} /> : <p>Loading appointments...</p>}
            </div>
            <div>
                <div className='flex flex-row justify-around mb-4'>
                    <div><h2 className="text-xl font-bold">Our Blood Requests</h2></div>
                </div>
                {requests.length > 0 ? <Bar data={requestChartData} options={{ plugins: { legend: legendOpts } }} /> : <p>Loading requests...</p>}
            </div>
        </div>
    );
};

export default HDashboard;
