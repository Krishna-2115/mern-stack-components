import React from 'react';

const FloatingNotification = ({ message }) => (
    <div className="fixed top-5 right-5 bg-purple-500 text-white px-4 py-3 rounded-lg shadow-lg">
        {message || 'Floating notification at the top-right corner.'}
    </div>
);

export default FloatingNotification;
