import React, { useState } from "react";

const TwoFactorAuth = ({ onVerify }) => {
    const [code, setCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onVerify(code);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Two-Factor Authentication</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter Code"
                    className="w-full p-2 border rounded"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                    Verify
                </button>
            </form>
        </div>
    );
};

export default TwoFactorAuth;