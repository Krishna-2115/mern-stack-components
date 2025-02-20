import React, { useState } from 'react';

const TermsCheckbox = ({ label, required }) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (required && !checked) setError('You must agree to the terms');
    else setError('');
  };

  return (
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          onBlur={handleSubmit}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TermsCheckbox;
