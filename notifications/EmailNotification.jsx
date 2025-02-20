import React from 'react';

const EmailNotification = ({ sender, subject }) => (
    <div className="bg-white border-l-4 border-blue-400 p-4 rounded-lg shadow">
        <p className="font-semibold">{sender || 'No Sender'}</p>
        <p>{subject || 'No Subject Available'}</p>
    </div>
);

export default EmailNotification;
