import React, { useState } from 'react';

const ChunkedFileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = () => {
    const chunkSize = 1024 * 1024;
    let start = 0;
    while (start < file.size) {
      const chunk = file.slice(start, start + chunkSize);
      console.log('Uploading chunk:', chunk);
      start += chunkSize;
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" onChange={handleFileChange} className="mb-3" />
      <button onClick={handleUpload} className="bg-purple-500 text-white px-4 py-2 rounded">Upload in Chunks</button>
    </div>
  );
};

export default ChunkedFileUpload;
