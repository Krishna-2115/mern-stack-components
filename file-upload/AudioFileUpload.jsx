import React, { useState } from 'react';

const AudioFileUpload = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" accept="audio/*" onChange={handleFileChange} className="mb-3" />
      {preview && <audio controls src={preview} className="w-full" />}
    </div>
  );
};

export default AudioFileUpload;
