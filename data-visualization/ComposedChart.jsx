import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
];

export default function ComposedChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#3b82f6" />
          <Line type="monotone" dataKey="pv" stroke="#ef4444" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
