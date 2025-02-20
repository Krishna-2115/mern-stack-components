import React, { useState } from "react";

const UserAvatarUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpload(file);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Upload Avatar</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="file"
                    className="w-full p-2 border rounded"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                    Upload
                </button>
            </form>
        </div>
    );
};

export default UserAvatarUpload;