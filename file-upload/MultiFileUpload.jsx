import React, { useState } from 'react';

const MultiFileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => setFiles([...e.target.files]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" multiple onChange={handleFileChange} className="mb-3" />
      <ul>{files.map((file, idx) => <li key={idx}>{file.name}</li>)}</ul>
    </div>
  );
};

export default MultiFileUpload;
