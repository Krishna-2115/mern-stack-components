import React from 'react';

const SuccessNotification = ({ message }) => (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
        {message || "Operation completed successfully!"}
    </div>
);

export default SuccessNotification;
