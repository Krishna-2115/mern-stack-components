export const OverviewCard = ({ title, value, icon: Icon }) => (
    <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
        <div>
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        {Icon && <Icon className="w-10 h-10 text-blue-500" />}
    </div>
);