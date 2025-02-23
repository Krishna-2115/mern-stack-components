import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 240 },
  { name: 'Feb', uv: 300, pv: 139 },
];

export default function StackedBarChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" stackId="a" fill="#3b82f6" />
          <Bar dataKey="pv" stackId="a" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
