import React from 'react';

const InfoNotification = ({ message }) => (
    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg">
        {message || "This is an informational message."}
    </div>
);

export default InfoNotification;
