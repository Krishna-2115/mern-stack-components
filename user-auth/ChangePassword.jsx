import React, { useState } from "react";

const ChangePassword = ({ onChangePassword }) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangePassword({ oldPassword, newPassword });
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="password"
                    placeholder="Old Password"
                    className="w-full p-2 border rounded"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="New Password"
                    className="w-full p-2 border rounded"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;