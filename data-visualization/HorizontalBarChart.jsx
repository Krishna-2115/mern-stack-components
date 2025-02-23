import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Product A', sales: 400 },
  { name: 'Product B', sales: 300 },
  { name: 'Product C', sales: 500 },
];

export default function HorizontalBarChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
