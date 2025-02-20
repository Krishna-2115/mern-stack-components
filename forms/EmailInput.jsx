import React, { useState } from 'react';

const EmailInput = ({ label, required }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);

    const handleBlur = () => {
        if (required && !email) setError('Email is required');
        else if (!validateEmail(email)) setError('Invalid email format');
        else setError('');
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                className={`mt-1 block w-full rounded-md border ${error ? 'border-red-500' : 'border-gray-300'
                    } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default EmailInput;
