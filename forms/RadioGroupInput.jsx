import React, { useState } from 'react';

const RadioGroupInput = ({ label, options, required }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (required && !selected) setError('Please select an option');
    else setError('');
  };

  return (
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-700">{label}</p>
      {options.map((opt, idx) => (
        <label key={idx} className="inline-flex items-center mr-4">
          <input
            type="radio"
            name={label}
            value={opt}
            checked={selected === opt}
            onChange={() => setSelected(opt)}
            onBlur={handleBlur}
            className="h-4 w-4 text-blue-600 border-gray-300"
          />
          <span className="ml-2 text-sm text-gray-700">{opt}</span>
        </label>
      ))}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default RadioGroupInput;
