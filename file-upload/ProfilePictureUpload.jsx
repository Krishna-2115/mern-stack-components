import React, { useState } from 'react';

const ProfilePictureUpload = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow text-center">
      {preview ? (
        <img src={preview} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default ProfilePictureUpload;
