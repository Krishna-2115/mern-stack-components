import React from "react";

const UserDashboard = ({ user }) => (
    <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Welcome, {user.name}</h2>
        <p>Your email: {user.email}</p>
        <p>Role: {user.role}</p>
    </div>
);

export default UserDashboard;