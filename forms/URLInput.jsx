import React, { useState } from 'react';

const URLInput = ({ label, required }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validateURL = (val) => /^https?:\/\/[^\s$.?#].[^\s]*$/.test(val);

  const handleBlur = () => {
    if (required && !value) setError('URL is required');
    else if (!validateURL(value)) setError('Invalid URL');
    else setError('');
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="url"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="https://example.com"
        className={`mt-1 block w-full rounded-md border ${
          error ? 'border-red-500' : 'border-gray-300'
        } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default URLInput;
