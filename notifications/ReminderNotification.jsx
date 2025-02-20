import React from 'react';

const ReminderNotification = ({ reminder }) => (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
        <p>{reminder || 'Don\'t forget your upcoming task.'}</p>
    </div>
);

export default ReminderNotification;
