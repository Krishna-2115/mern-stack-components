import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '0', a: 400, b: 240, c: 240 },
  { time: '1', a: 300, b: 139, c: 221 },
  { time: '2', a: 200, b: 980, c: 229 },
  { time: '3', a: 278, b: 390, c: 200 },
  { time: '4', a: 189, b: 480, c: 218 },
];

export default function Streamgraph() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} stackOffset="expand">
          <XAxis dataKey="time" />
          <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
          <Tooltip formatter={(value) => `${(value * 100).toFixed(2)}%`} />
          <Area type="monotone" dataKey="a" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
          <Area type="monotone" dataKey="b" stackId="1" stroke="#ef4444" fill="#ef4444" />
          <Area type="monotone" dataKey="c" stackId="1" stroke="#facc15" fill="#facc15" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
