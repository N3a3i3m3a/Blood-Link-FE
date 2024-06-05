import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';

const HDashboard = () => {
    const [appointmentsData, setAppointmentsData] = useState([]);
    const [requestsData, setRequestsData] = useState([]);
    const [error, setError] = useState(null);
    const hospitalId = localStorage.getItem("hospitalId"); // Assume hospital ID is stored in local storage

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [appointmentsResponse, requestsResponse] = await Promise.all([
                    axios.get(`https://blood-link-be.onrender.com/api/appointment/getAppointmentsOfAHospital/${hospitalId}`),
                    axios.get(`https://blood-link-be.onrender.com/api/hospital/onehospitalRequests/${hospitalId}`)
                ]);

                setAppointmentsData(appointmentsResponse.data.appointments);
                setRequestsData(requestsResponse.data.requests);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to fetch data. Please try again later.');
            }
        };

        fetchData();
    }, [hospitalId]);

    const formatChartData = (data, label) => {
        const labels = data.map(item => new Date(item.createdAt).toLocaleDateString());
        const values = data.map(item => 1); // Each item represents a single event

        return {
            labels,
            datasets: [{
                label,
                data: values,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            }]
        };
    };

    const appointmentsChartData = formatChartData(appointmentsData, 'Appointments');
    const requestsChartData = formatChartData(requestsData, 'Blood Requests');

    return (
        <div className="container mx-auto px-4">
            {/* <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            {error && <div className="text-red-500">{error}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Recent Appointments</h2>
                    <Line data={appointmentsChartData} />
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Blood Requests</h2>
                    <Bar data={requestsChartData} />
                </div>
            </div> */}
        </div>
    );
};

export default HDashboard;
