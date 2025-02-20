import React, { useState } from 'react';

const DragAndDropUpload = () => {
    const [file, setFile] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0]);
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="w-full h-40 flex justify-center items-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg"
        >
            {file ? <p>{file.name}</p> : <p>Drag & drop files here</p>}
        </div>
    );
};

export default DragAndDropUpload;
