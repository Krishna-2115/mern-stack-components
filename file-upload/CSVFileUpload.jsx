import React, { useState } from 'react';

const CSVFileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await fetch('/api/upload/csv', { method: 'POST', body: formData });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" accept=".csv" onChange={handleFileChange} className="mb-3" />
      <button onClick={handleUpload} className="bg-yellow-500 text-white px-4 py-2 rounded">Upload CSV File</button>
    </div>
  );
};

export default CSVFileUpload;
