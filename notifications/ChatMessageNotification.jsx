import React from 'react';

const ChatMessageNotification = ({ user, message }) => (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
        <p className="font-semibold">{user || 'User'}</p>
        <p>{message || 'Sent you a message.'}</p>
    </div>
);

export default ChatMessageNotification;
