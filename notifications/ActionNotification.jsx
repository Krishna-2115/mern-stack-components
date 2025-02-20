import React from 'react';

const ActionNotification = ({ message, onAction, actionLabel }) => (
    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg flex justify-between items-center">
        <span>{message || 'This is an action notification.'}</span>
        <button onClick={onAction} className="ml-4 bg-blue-500 text-white px-3 py-1 rounded-lg">
            {actionLabel || 'Take Action'}
        </button>
    </div>
);

export default ActionNotification;
