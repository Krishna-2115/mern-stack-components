import React, { useState } from 'react';

const VideoFileUpload = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" accept="video/*" onChange={handleFileChange} className="mb-3" />
      {preview && <video controls src={preview} className="w-full rounded-lg" />}
    </div>
  );
};

export default VideoFileUpload;
