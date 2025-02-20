import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from '../firebaseConfig';

const FirebaseFileUpload = () => {
  const [file, setFile] = useState(null);
  const storage = getStorage(app);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = () => {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', null, console.error, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log('File available at', url));
    });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <input type="file" onChange={handleFileChange} className="mb-3" />
      <button onClick={handleUpload} className="bg-red-500 text-white px-4 py-2 rounded">Upload to Firebase</button>
    </div>
  );
};

export default FirebaseFileUpload;
