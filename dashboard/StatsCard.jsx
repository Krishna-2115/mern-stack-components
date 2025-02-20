export const StatsCard = ({ label, count, percentage }) => (
    <div className="bg-white rounded-2xl shadow p-6 text-center">
        <h4 className="text-sm text-gray-500">{label}</h4>
        <p className="text-3xl font-semibold text-gray-900">{count}</p>
        <p className={`text-sm ${percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {percentage >= 0 ? '+' : ''}{percentage}% from last week
        </p>
    </div>
);