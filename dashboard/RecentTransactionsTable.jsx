import React from 'react';

const RecentTransactionsTable = () => {
    const transactions = [
        { id: 1, name: 'Alice Johnson', date: '2025-02-19', amount: '$250', status: 'Completed' },
        { id: 2, name: 'Bob Smith', date: '2025-02-18', amount: '$180', status: 'Pending' },
        { id: 3, name: 'Charlie Brown', date: '2025-02-17', amount: '$320', status: 'Failed' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full overflow-x-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h3>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((tx) => (
                        <tr key={tx.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tx.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tx.amount}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${tx.status === 'Completed' ? 'text-green-600' : tx.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                                {tx.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentTransactionsTable;
