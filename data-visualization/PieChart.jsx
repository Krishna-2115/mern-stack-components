import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
];

export default function PieChart() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={data} dataKey="value" outerRadius={100} fill="#3b82f6" />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
