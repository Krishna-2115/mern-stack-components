import React from 'react';

const ModalNotification = ({ title, message, onClose }) => (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-2">{title || 'Notification'}</h3>
            <p>{message || 'This is a modal notification.'}</p>
            <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Close</button>
        </div>
    </div>
);

export default ModalNotification;
