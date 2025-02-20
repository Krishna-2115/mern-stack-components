import React from 'react';

const AccountUpdateNotification = ({ update }) => (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <p>{update || 'Your account details have been updated.'}</p>
    </div>
);

export default AccountUpdateNotification;
