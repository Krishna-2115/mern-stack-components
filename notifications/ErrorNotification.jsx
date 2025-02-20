import React from 'react';

const ErrorNotification = ({ message }) => (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
        {message || "An error occurred. Please try again."}
    </div>
);

export default ErrorNotification;
