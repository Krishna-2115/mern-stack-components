import React from "react";

const EmailVerification = ({ onVerify }) => (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Verify Your Email</h2>
        <button
            onClick={onVerify}
            className="w-full p-2 bg-blue-500 text-white rounded"
        >
            Verify Email
        </button>
    </div>
);

export default EmailVerification;