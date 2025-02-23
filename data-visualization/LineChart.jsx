import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 200 },
  { name: 'Mar', value: 150 },
];

export default function LineChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
