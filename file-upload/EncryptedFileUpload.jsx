import React, { useState } from 'react';

const EncryptedFileUpload = () => {
  const [file, setFile] = useState(null);

  const encryptFile = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    const encryptedData = await encryptFile(file);
    console.log('Encrypted file data:', encryptedData);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" onChange={handleFileChange} className="mb-3" />
      <button onClick={handleUpload} className="bg-red-500 text-white px-4 py-2 rounded">Upload Encrypted File</button>
    </div>
  );
};

export default EncryptedFileUpload;
