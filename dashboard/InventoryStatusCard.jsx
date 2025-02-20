import React from 'react';

const InventoryStatusCard = () => {
    const inventory = [
        { product: 'Laptop', stock: 24 },
        { product: 'Headphones', stock: 0 },
        { product: 'Smartwatch', stock: 12 },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Inventory Status</h3>
            <ul className="space-y-3">
                {inventory.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{item.product}</span>
                        <span className={item.stock > 0 ? 'text-green-500' : 'text-red-500'}>
                            {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryStatusCard;
