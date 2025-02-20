import React from 'react';

const NotificationPanel = () => {
    const notifications = [
        { id: 1, message: 'New user registered', time: '10 mins ago' },
        { id: 2, message: 'Order #4567 has been shipped', time: '30 mins ago' },
        { id: 3, message: 'New comment on product review', time: '1 hour ago' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Notifications</h3>
            <ul className="space-y-3">
                {notifications.map((notification) => (
                    <li key={notification.id} className="flex justify-between items-center">
                        <p className="text-gray-700">{notification.message}</p>
                        <span className="text-gray-500 text-sm">{notification.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationPanel;
