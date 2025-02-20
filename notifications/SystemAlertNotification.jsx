import React from 'react';

const SystemAlertNotification = ({ alert }) => (
    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
        <p>{alert || 'System alert: Action required immediately.'}</p>
    </div>
);

export default SystemAlertNotification;
