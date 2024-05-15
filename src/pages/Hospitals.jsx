import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Hospitals() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className="text-2xl text-white font-bold">DASHBOARD</h3>
      </div>

      <div className="main-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-red-500 text-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-xl">Donars</h3>
            <BsFillArchiveFill className="text-3xl" />
          </div>
          <h1 className="text-4xl font-bold">300</h1>
        </div>
        <div className="card bg-red-500 text-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-xl">Hospital</h3>
            <BsFillGrid3X3GapFill className="text-3xl" />
          </div>
          <h1 className="text-4xl font-bold">12</h1>
        </div>
      </div>

      <div className="charts grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Hospitals
