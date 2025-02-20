import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Marketing', value: 4000 },
  { name: 'Operations', value: 3000 },
  { name: 'Research', value: 2000 },
  { name: 'HR', value: 1000 },
];

const COLORS = ['#10B981', '#6366F1', '#F59E0B', '#EF4444'];

const ExpenseBreakdownChart = () => (
  <div className="bg-white rounded-2xl shadow p-6 w-full">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Expense Breakdown</h3>
    <PieChart width={350} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

export default ExpenseBreakdownChart;
