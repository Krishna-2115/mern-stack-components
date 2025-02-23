import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 240 },
  { name: 'Feb', uv: 300, pv: 139 },
];

export default function MultiLineChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#3b82f6" />
          <Line type="monotone" dataKey="pv" stroke="#ef4444" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
