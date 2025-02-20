import React, { useState } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';

const AzureBlobFileUpload = () => {
  const [file, setFile] = useState(null);
  const blobServiceClient = new BlobServiceClient('YOUR_AZURE_CONNECTION_STRING');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    const containerClient = blobServiceClient.getContainerClient('your-container-name');
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);
    await blockBlobClient.uploadBrowserData(file);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" onChange={handleFileChange} className="mb-3" />
      <button onClick={handleUpload} className="bg-purple-500 text-white px-4 py-2 rounded">Upload to Azure Blob</button>
    </div>
  );
};

export default AzureBlobFileUpload;
