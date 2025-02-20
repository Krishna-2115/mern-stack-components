import React from 'react';

const PerformanceMetricsCard = () => {
    const metrics = [
        { label: 'Sales', value: '$12,500' },
        { label: 'Conversions', value: '8.5%' },
        { label: 'Engagement', value: '76%' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Performance Metrics</h3>
            <ul className="space-y-3">
                {metrics.map((metric, index) => (
                    <li key={index} className="flex justify-between text-gray-800">
                        <span>{metric.label}</span>
                        <span className="font-semibold">{metric.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PerformanceMetricsCard;
