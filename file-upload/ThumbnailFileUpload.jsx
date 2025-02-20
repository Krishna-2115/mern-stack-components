import React, { useState } from 'react';

const ThumbnailFileUpload = () => {
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
      {preview && <img src={preview} alt="Thumbnail" className="w-24 h-24 rounded object-cover" />}
    </div>
  );
};

export default ThumbnailFileUpload;
