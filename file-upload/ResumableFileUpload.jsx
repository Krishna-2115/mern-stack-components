import React, { useState } from 'react';

const ResumableFileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = () => {
    let uploaded = 0;
    const interval = setInterval(() => {
      uploaded += 20;
      setProgress(uploaded);
      if (uploaded >= 100) clearInterval(interval);
    }, 500);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" onChange={handleFileChange} className="mb-3" />
      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
        <div className="bg-green-500 h-3 rounded-full" style={{ width: `${progress}%` }} />
      </div>
      <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 rounded">Upload Resumable</button>
    </div>
  );
};

export default ResumableFileUpload;
