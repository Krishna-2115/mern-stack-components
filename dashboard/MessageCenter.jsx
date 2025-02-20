import React from 'react';

const MessageCenter = () => {
    const messages = [
        { id: 1, sender: 'Alex Johnson', text: 'Can we schedule a meeting tomorrow?', time: '2 hrs ago' },
        { id: 2, sender: 'Lisa Brown', text: 'Project deadline has been extended.', time: '5 hrs ago' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Message Center</h3>
            <ul className="space-y-4">
                {messages.map((msg) => (
                    <li key={msg.id} className="border-b pb-2">
                        <p className="font-medium text-gray-800">{msg.sender}</p>
                        <p className="text-gray-600">{msg.text}</p>
                        <p className="text-sm text-gray-400">{msg.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageCenter;
