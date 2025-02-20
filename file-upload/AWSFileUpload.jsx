import React, { useState } from 'react';
import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const s3 = new AWS.S3({
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_KEY',
});

const AWSFileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = () => {
        const params = {
            Bucket: 'YOUR_BUCKET_NAME',
            Key: file.name,
            Body: file,
        };
        s3.upload(params, (err, data) => {
            if (err) console.error(err);
            else console.log('Uploaded:', data.Location);
        });
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <input type="file" onChange={handleFileChange} className="mb-3" />
            <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 rounded">Upload to AWS S3</button>
        </div>
    );
};

export default AWSFileUpload;
