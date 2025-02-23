import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 300 },
  { name: 'Mar', sales: 500 },
];

export default function BarChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
