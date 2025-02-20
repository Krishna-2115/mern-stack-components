export const SalesSummaryWidget = ({ totalSales, growth }) => (
    <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Sales Summary</h3>
        <p className="text-3xl font-bold text-gray-900">${totalSales}</p>
        <p className={`text-sm ${growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {growth >= 0 ? '+' : ''}{growth}% compared to last month
        </p>
    </div>
);