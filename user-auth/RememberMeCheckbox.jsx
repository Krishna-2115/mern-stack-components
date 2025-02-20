import React from "react";

const RememberMeCheckbox = ({ rememberMe, setRememberMe }) => (
    <div className="flex items-center">
        <input
            type="checkbox"
            className="mr-2"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label>Remember Me</label>
    </div>
);

export default RememberMeCheckbox;