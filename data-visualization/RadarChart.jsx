import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Math', A: 120, B: 110 },
  { subject: 'Science', A: 98, B: 130 },
  { subject: 'English', A: 86, B: 130 },
];

export default function RadarChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Student A" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
          <Radar name="Student B" dataKey="B" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
