import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Q1', value: 400 },
  { name: 'Q2', value: 300 },
  { name: 'Q3', value: 500 },
];

export default function VerticalBarChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
