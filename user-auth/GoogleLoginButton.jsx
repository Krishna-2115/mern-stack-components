import React from "react";

const GoogleLoginButton = ({ onLogin }) => (
    <button
        onClick={onLogin}
        className="w-full p-2 bg-red-500 text-white rounded"
    >
        Sign in with Google
    </button>
);

export default GoogleLoginButton;