import { useState } from 'react';

export default function MediaTogglePlayer() {
  const [mediaType, setMediaType] = useState('audio');

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setMediaType('audio')} className={`px-4 py-2 rounded ${mediaType==='audio' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          Audio
        </button>
        <button onClick={() => setMediaType('video')} className={`px-4 py-2 rounded ${mediaType==='video' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          Video
        </button>
      </div>
      {mediaType === 'audio' ? (
        <audio controls src="audio-file.mp3" className="w-full" />
      ) : (
        <video controls src="video-file.mp4" className="w-full" poster="video-poster.jpg" />
      )}
    </div>
  );
}
