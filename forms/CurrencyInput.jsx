import React, { useState } from 'react';

const CurrencyInput = ({ label, required }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (required && !value) setError('Amount is required');
    else setError('');
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">$</span>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          className={`pl-8 w-full rounded-md border ${
            error ? 'border-red-500' : 'border-gray-300'
          } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CurrencyInput;
