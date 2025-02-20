import React from 'react';

const TopProductsList = () => {
    const products = [
        { id: 1, name: 'Wireless Headphones', sales: 1200, category: 'Electronics' },
        { id: 2, name: 'Fitness Tracker', sales: 950, category: 'Wearables' },
        { id: 3, name: 'Smartphone', sales: 880, category: 'Electronics' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Top Products</h3>
            <ul className="space-y-4">
                {products.map((product) => (
                    <li key={product.id} className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-900 font-medium">{product.name}</p>
                            <p className="text-gray-500 text-sm">{product.category}</p>
                        </div>
                        <span className="text-green-600 font-semibold">{product.sales} Sales</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopProductsList;
