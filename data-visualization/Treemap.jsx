import { Treemap, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', size: 400 },
  { name: 'B', size: 300 },
  { name: 'C', size: 300 },
  { name: 'D', size: 200 },
];

export default function Treemap() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <Treemap data={data} dataKey="size" stroke="#fff" fill="#3b82f6" />
      </ResponsiveContainer>
    </div>
  );
}
