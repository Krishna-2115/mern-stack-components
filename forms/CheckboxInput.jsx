import React, { useState } from 'react';

const CheckboxInput = ({ label, required }) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (required && !checked) setError('This checkbox is required');
    else setError('');
  };

  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          onBlur={handleBlur}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CheckboxInput;
