import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', earnings: 4000 },
    { month: 'Feb', earnings: 3000 },
    { month: 'Mar', earnings: 5000 },
    { month: 'Apr', earnings: 4000 },
    { month: 'May', earnings: 6000 },
];

const EarningsGraph = () => {
    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Earnings Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="earnings" stroke="#4F46E5" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EarningsGraph;
