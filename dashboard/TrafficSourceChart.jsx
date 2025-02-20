import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';


const data = [
    { name: 'Direct', value: 400 },
    { name: 'Referral', value: 300 },
    { name: 'Social Media', value: 300 },
    { name: 'Organic Search', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const TrafficSourceChart = () => {
    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Traffic Sources</h3>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default TrafficSourceChart;
