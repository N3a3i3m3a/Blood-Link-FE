import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        BloodRequest: 4000,
        ExistingRequest: 2400
    },
    {
        name: 'February',
        BloodRequest: 3000,
        ExistingRequest: 1398
    },
    {
        name: 'March',
        BloodRequest: 2000,
        ExistingRequest: 9800
    },
    {
        name: 'April',
        BloodRequest: 2780,
        ExistingRequest: 3908
    },
    {
        name: 'May',
        BloodRequest: 1890,
        ExistingRequest: 4800
    },
    {
        name: 'June',
        BloodRequest: 2390,
        ExistingRequest: 3800
    },
    {
        name: 'July',
        BloodRequest: 3490,
        ExistingRequest: 4300
    },
    {
        name: 'August',
        BloodRequest: 2000,
        ExistingRequest: 9800
    },
    {
        name: 'September',
        BloodRequest: 2780,
        ExistingRequest: 3908
    },
    {
        name: 'October',
        BloodRequest: 1890,
        ExistingRequest: 4800
    },
    {
        name: 'November',
        BloodRequest: 2390,
        ExistingRequest: 3800
    },
    {
        name: 'December',
        BloodRequest: 3490,
        ExistingRequest: 4300
    }
];

export default function DonationChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">History</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="BloodRequest" stroke="#0ea5e9" />
                        <Line type="monotone" dataKey="ExistingRequest" stroke="#ea580c" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
