import React, { useState } from "react";

const OTPLogin = ({ onSubmitOTP }) => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitOTP({ phone, otp });
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">OTP Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="OTP"
                    className="w-full p-2 border rounded"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
                <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
                    Verify OTP
                </button>
            </form>
        </div>
    );
};

export default OTPLogin;