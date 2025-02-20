import React from 'react';

const ProfileCard = () => {
    const user = {
        name: 'Sophia Williams',
        role: 'Product Manager',
        avatar: 'https://via.placeholder.com/100', // Replace with actual image URL
    };

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full flex flex-col items-center">
            <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">{user.name}</h3>
            <p className="text-gray-500">{user.role}</p>
        </div>
    );
};

export default ProfileCard;
