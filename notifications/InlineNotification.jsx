import React from 'react';

const InlineNotification = ({ message }) => (
    <div className="bg-gray-100 border border-gray-300 text-gray-700 p-3 rounded-lg">
        {message || 'This is an inline notification.'}
    </div>
);

export default InlineNotification;
