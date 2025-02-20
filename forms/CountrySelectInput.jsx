import React, { useState } from 'react';

const CountrySelectInput = ({ label, countries, required }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (required && !selected) setError('Please select a country');
    else setError('');
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        onBlur={handleBlur}
        className={`mt-1 block w-full rounded-md border ${
          error ? 'border-red-500' : 'border-gray-300'
        } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
      >
        <option value="">Select a country</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CountrySelectInput;
