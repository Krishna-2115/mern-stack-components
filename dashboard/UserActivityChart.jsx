import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const UserActivityChart = ({ data }) => (
    <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">User Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#10b981" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);