import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    { month: 'Jan', sales: 300 },
    { month: 'Feb', sales: 500 },
    { month: 'Mar', sales: 700 },
    { month: 'Apr', sales: 600 },
];

const ProductPerformanceChart = () => (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Product Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default ProductPerformanceChart;
