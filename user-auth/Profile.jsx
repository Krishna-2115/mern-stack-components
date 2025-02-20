import React from "react";

const Profile = ({ user }) => (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <p className="text-gray-700">Name: {user.name}</p>
        <p className="text-gray-700">Email: {user.email}</p>
    </div>
);

export default Profile;