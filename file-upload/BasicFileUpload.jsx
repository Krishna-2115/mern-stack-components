import React, { useState } from 'react';

const BasicFileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = () => {
        if (file) console.log('File ready for upload:', file);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <input type="file" onChange={handleFileChange} className="mb-3" />
            <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
        </div>
    );
};

export default BasicFileUpload;
