import React from "react";

const CaptchaVerification = ({ captchaUrl, onVerify }) => (
    <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Captcha Verification</h2>
        <img src={captchaUrl} alt="Captcha" className="mb-4 w-full" />
        <button
            onClick={onVerify}
            className="w-full p-2 bg-blue-500 text-white rounded"
        >
            Verify Captcha
        </button>
    </div>
);

export default CaptchaVerification;