import React, { useState } from 'react';

const FileUploadProgress = () => {
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    let uploaded = 0;
    const interval = setInterval(() => {
      uploaded += 10;
      setProgress(uploaded);
      if (uploaded >= 100) clearInterval(interval);
    }, 300);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${progress}%` }} />
      </div>
      <button onClick={handleUpload} className="bg-indigo-500 text-white px-4 py-2 rounded">Start Upload</button>
    </div>
  );
};

export default FileUploadProgress;
