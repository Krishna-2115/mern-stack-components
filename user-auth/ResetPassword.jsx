import { useState } from "react";

const ResetPassword = ({ onReset }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onReset(email);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded">
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
