import React, { useState } from 'react';

const ToggleSwitchInput = ({ label }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
          enabled ? 'bg-blue-600' : 'bg-gray-300'
        } transition`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitchInput;
