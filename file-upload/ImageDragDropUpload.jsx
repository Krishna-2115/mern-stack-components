import React, { useState } from 'react';

const ImageDragDropUpload = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center"
    >
      {file ? (
        <p>{file.name}</p>
      ) : (
        <p className="text-gray-500">Drag and drop an image here</p>
      )}
    </div>
  );
};

export default ImageDragDropUpload;
