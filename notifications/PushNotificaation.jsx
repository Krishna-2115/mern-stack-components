import React from 'react';

const PushNotification = ({ title, message }) => (
    <div className="fixed bottom-10 right-10 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
        <h4 className="font-semibold">{title || 'Push Notification'}</h4>
        <p>{message || 'You have a new notification.'}</p>
    </div>
);

export default PushNotification;
