import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 100 },
  { month: 'Feb', users: 200 },
  { month: 'Mar', users: 400 },
  { month: 'Apr', users: 650 },
];

const UserGrowthChart = () => (
  <div className="bg-white rounded-2xl shadow p-6 w-full">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">User Growth</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#34D399" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default UserGrowthChart;
