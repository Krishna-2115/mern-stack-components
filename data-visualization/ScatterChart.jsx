import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { x: 100, y: 200 },
  { x: 120, y: 100 },
  { x: 170, y: 300 },
];

export default function ScatterChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis dataKey="x" name="stature" />
          <YAxis dataKey="y" name="weight" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#3b82f6" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
