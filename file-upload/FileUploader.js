import React, { useState } from 'react';

const FileUploader = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        // Implement file upload logic here
        console.log('Uploading file:', file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {file && <p>Selected File: {file.name}</p>}
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUploader;
