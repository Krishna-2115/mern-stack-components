import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', uv: 400 },
  { month: 'Feb', uv: 300 },
  { month: 'Mar', uv: 200 },
];

export default function AreaChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
