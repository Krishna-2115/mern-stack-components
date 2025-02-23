import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', uv: 400, pv: 240, amt: 240 },
  { month: 'Feb', uv: 300, pv: 139, amt: 221 },
  { month: 'Mar', uv: 200, pv: 980, amt: 229 },
];

export default function StackedAreaChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#3b82f6" fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#ef4444" fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
