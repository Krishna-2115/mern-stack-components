import React from 'react';

const FriendRequestNotification = ({ username }) => (
    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
        <p>{username || 'Someone'} sent you a friend request.</p>
    </div>
);

export default FriendRequestNotification;
