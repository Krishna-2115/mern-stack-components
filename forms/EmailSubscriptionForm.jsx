import React, { useState } from 'react';

const EmailSubscriptionForm = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = () => {
    if (!email) setError('Email is required');
    else if (!validateEmail(email)) setError('Invalid email address');
    else {
      setError('');
      onSubscribe(email);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        onClick={handleSubmit}
        className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Subscribe
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default EmailSubscriptionForm;
