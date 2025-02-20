import React, { useState } from 'react';

const PhoneNumberInput = ({ label, required }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validatePhone = (val) => /^[0-9]{10}$/.test(val);

  const handleBlur = () => {
    if (required && !value) setError('Phone number is required');
    else if (!validatePhone(value)) setError('Invalid phone number');
    else setError('');
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="1234567890"
        className={`mt-1 block w-full rounded-md border ${
          error ? 'border-red-500' : 'border-gray-300'
        } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
