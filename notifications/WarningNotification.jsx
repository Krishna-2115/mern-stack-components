import React from 'react';

const WarningNotification = ({ message }) => (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg">
        {message || "Warning: Check your input."}
    </div>
);

export default WarningNotification;
