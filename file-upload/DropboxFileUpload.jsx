import React, { useState } from 'react';

const DropboxFileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await fetch('/api/upload/dropbox', { method: 'POST', body: formData });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" onChange={handleFileChange} className="mb-3" />
      <button onClick={handleUpload} className="bg-blue-400 text-white px-4 py-2 rounded">Upload to Dropbox</button>
    </div>
  );
};

export default DropboxFileUpload;
