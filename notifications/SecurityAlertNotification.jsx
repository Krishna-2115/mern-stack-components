import React from 'react';

const SecurityAlertNotification = ({ alert }) => (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
        <p>{alert || 'Security alert: Please review your recent activities.'}</p>
    </div>
);

export default SecurityAlertNotification;
