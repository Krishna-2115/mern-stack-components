import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const RevenueChart = ({ data }) => (
    <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Revenue Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);