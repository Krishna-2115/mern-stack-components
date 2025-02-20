import React, { useState } from "react";

const AccountRecovery = ({ onRecover }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onRecover(email);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Account Recovery</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
                    Recover Account
                </button>
            </form>
        </div>
    );
};

export default AccountRecovery;