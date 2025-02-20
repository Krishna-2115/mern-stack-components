import React, { useState } from 'react';

const FilePreviewUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" onChange={handleFileChange} className="mb-3" />
      {preview && <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded" />}
    </div>
  );
};

export default FilePreviewUpload;
