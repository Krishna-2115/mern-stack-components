import { ComposedChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar } from 'recharts';

const data = [
  { date: '2025-01-01', open: 100, close: 120, low: 90, high: 130 },
  { date: '2025-01-02', open: 120, close: 110, low: 100, high: 125 },
  { date: '2025-01-03', open: 110, close: 115, low: 105, high: 120 },
];

export default function CandlestickChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-auto">
      <ResponsiveContainer width={600} height={300}>
        <ComposedChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          {data.map((entry, index) => {
            const fillColor = entry.open > entry.close ? '#ef4444' : '#3b82f6';
            return (
              <Bar
                key={`bar-${index}`}
                dataKey="open"
                fill={fillColor}
                barSize={20}
                data={[entry]}
              />
            );
          })}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
