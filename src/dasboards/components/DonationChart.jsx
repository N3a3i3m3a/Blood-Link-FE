import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DonationChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://blood-link-be.onrender.com/api/appointment/getComfirmedAppointments');
                const confirmedAppointments = response.data.confirmedAppointments;

                // Count the number of confirmed appointments for each hospital
                const hospitals = {};
                confirmedAppointments.forEach(appointment => {
                    const hospitalName = appointment.hospital ? appointment.hospital.name : 'Unknown Hospital';
                    hospitals[hospitalName] = (hospitals[hospitalName] || 0) + 1;
                });

                // Convert the counted data into the required format for the bar chart
                const data = Object.entries(hospitals).map(([name, count]) => ({
                    name,
                    Donates: count
                }));

                setChartData(data);
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white p-4 rounded-md border border-gray-300" style={{ height: '500px', width: '100%', maxWidth: '800px' }}>
            <h2 className="text-xl font-semibold mb-4">Donation Chart</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 'dataMax']} interval={0} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Donates" fill="#fca5a5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DonationChart;
