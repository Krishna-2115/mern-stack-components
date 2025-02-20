import React, { useState } from 'react';

const PasswordInput = ({ label, required }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (required && !password) setError('Password is required');
    else if (password.length < 6) setError('Password must be at least 6 characters');
    else setError('');
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handleBlur}
        className={`mt-1 block w-full rounded-md border ${
          error ? 'border-red-500' : 'border-gray-300'
        } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
