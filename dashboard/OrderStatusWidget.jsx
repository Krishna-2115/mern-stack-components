import React from 'react';

const OrderStatusWidget = () => {
    const statuses = [
        { status: 'Pending', count: 12, color: 'text-yellow-500' },
        { status: 'Shipped', count: 20, color: 'text-blue-500' },
        { status: 'Delivered', count: 45, color: 'text-green-500' },
        { status: 'Cancelled', count: 5, color: 'text-red-500' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Order Status</h3>
            <ul className="space-y-3">
                {statuses.map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <span className={item.color}>{item.status}</span>
                        <span className="font-semibold">{item.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderStatusWidget;
