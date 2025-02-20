import React from "react";

const FacebookLoginButton = ({ onLogin }) => (
    <button
        onClick={onLogin}
        className="w-full p-2 bg-blue-600 text-white rounded"
    >
        Sign in with Facebook
    </button>
);

export default FacebookLoginButton;