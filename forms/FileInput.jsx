import React, { useState } from 'react';

const FileInput = ({ label, required }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (required && !file) setError('File is required');
    else setError('');
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        onBlur={handleBlur}
        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FileInput;
