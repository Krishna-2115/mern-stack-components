import React from 'react';

const SubscriptionStatusWidget = () => {
    const subscriptions = [
        { status: 'Active', count: 150, color: 'text-green-500' },
        { status: 'Expired', count: 30, color: 'text-red-500' },
        { status: 'Trial', count: 20, color: 'text-yellow-500' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Subscription Status</h3>
            <ul className="space-y-3">
                {subscriptions.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{item.status}</span>
                        <span className={`font-semibold ${item.color}`}>{item.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubscriptionStatusWidget;
