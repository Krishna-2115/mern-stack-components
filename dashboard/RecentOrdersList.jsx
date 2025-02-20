import React from 'react';

const RecentOrdersList = () => {
    const orders = [
        { id: 'ORD001', customer: 'Emma Watson', date: '2025-02-18', amount: '$250' },
        { id: 'ORD002', customer: 'Daniel Radcliffe', date: '2025-02-19', amount: '$120' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Orders</h3>
            <ul className="space-y-4">
                {orders.map((order) => (
                    <li key={order.id} className="flex justify-between">
                        <div>
                            <p className="font-medium">{order.customer}</p>
                            <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <p className="font-semibold text-gray-800">{order.amount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentOrdersList;
