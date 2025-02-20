import React, { useState } from 'react';

const PasswordStrengthInput = ({ label, required }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (password) => {
    if (password.length < 6) return 'Weak';
    if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8) return 'Strong';
    return 'Medium';
  };

  const handleBlur = () => {
    if (required && !value) setError('Password is required');
    else setError('');
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    setStrength(checkStrength(val));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="password"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`mt-1 block w-full rounded-md border ${
          error ? 'border-red-500' : 'border-gray-300'
        } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
      />
      <p className={`text-sm mt-1 ${strength === 'Strong' ? 'text-green-500' : strength === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
        Strength: {strength}
      </p>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordStrengthInput;
