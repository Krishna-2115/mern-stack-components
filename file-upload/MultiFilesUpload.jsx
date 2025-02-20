import React, { useState } from 'react';

const MultiFilesUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => setFiles([...e.target.files]);

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    await fetch('/api/upload/multiple', { method: 'POST', body: formData });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" multiple onChange={handleFileChange} className="mb-3" />
      <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 rounded">Upload All</button>
    </div>
  );
};

export default MultiFilesUpload;
