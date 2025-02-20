import React from 'react';

const ServerHealthWidget = () => {
    const healthMetrics = [
        { label: 'Uptime', value: '99.9%', color: 'text-green-500' },
        { label: 'CPU Usage', value: '65%', color: 'text-yellow-500' },
        { label: 'Memory Usage', value: '70%', color: 'text-blue-500' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Server Health</h3>
            <ul className="space-y-3">
                {healthMetrics.map((metric, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{metric.label}</span>
                        <span className={`font-semibold ${metric.color}`}>{metric.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServerHealthWidget;
