import React from "react";

const AdminDashboard = ({ users, onManageUser }) => (
    <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
        <ul>
            {users.map((user) => (
                <li key={user.id} className="mb-2 flex justify-between items-center">
                    <span>{user.name} ({user.role})</span>
                    <button
                        onClick={() => onManageUser(user.id)}
                        className="p-2 bg-red-500 text-white rounded"
                    >
                        Manage
                    </button>
                </li>
            ))}
        </ul>
    </div>
);

export default AdminDashboard;