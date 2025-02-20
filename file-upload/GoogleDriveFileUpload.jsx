import React, { useState } from 'react';

const GoogleDriveFileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        await fetch('YOUR_GOOGLE_DRIVE_API_ENDPOINT', {
            method: 'POST',
            headers: { Authorization: `Bearer YOUR_ACCESS_TOKEN` },
            body: formData,
        });
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <input type="file" onChange={handleFileChange} className="mb-3" />
            <button onClick={handleUpload} className="bg-yellow-500 text-white px-4 py-2 rounded">Upload to Google Drive</button>
        </div>
    );
};

export default GoogleDriveFileUpload;
