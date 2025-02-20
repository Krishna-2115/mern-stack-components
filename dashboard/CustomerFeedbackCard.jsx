import React from 'react';

const CustomerFeedbackCard = () => {
    const feedbacks = [
        { id: 1, name: 'Emily Clark', feedback: 'Great experience! Fast shipping and excellent support.', rating: 5 },
        { id: 2, name: 'Michael Thompson', feedback: 'Product quality could be better.', rating: 3 },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Feedback</h3>
            {feedbacks.map((item) => (
                <div key={item.id} className="mb-4">
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-gray-600 text-sm mb-1">{item.feedback}</p>
                    <p className="text-yellow-500">{'⭐'.repeat(item.rating)}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerFeedbackCard;
