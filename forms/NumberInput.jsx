import React, { useState } from 'react';

const NumberInput = ({ label, required, min, max }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleBlur = () => {
        if (required && !value) setError('This field is required');
        else if (value < min || value > max) setError(`Value must be between ${min} and ${max}`);
        else setError('');
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={handleBlur}
                className={`mt-1 block w-full rounded-md border ${error ? 'border-red-500' : 'border-gray-300'
                    } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default NumberInput;
