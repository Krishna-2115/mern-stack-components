import React from 'react';

const ConfirmationNotification = ({ message, onConfirm, onCancel }) => (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
        <p>{message || 'Are you sure you want to proceed?'}</p>
        <div className="mt-3 flex space-x-2">
            <button onClick={onConfirm} className="bg-green-500 text-white px-4 py-2 rounded-lg">Yes</button>
            <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded-lg">No</button>
        </div>
    </div>
);

export default ConfirmationNotification;
