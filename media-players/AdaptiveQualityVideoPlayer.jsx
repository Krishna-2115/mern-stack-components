import { useState } from 'react';

export default function AdaptiveQualityVideoPlayer() {
  const sources = {
    low: 'video-file-480p.mp4',
    medium: 'video-file-720p.mp4',
    high: 'video-file-1080p.mp4',
  };
  const [quality, setQuality] = useState('medium');

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <video controls src={sources[quality]} className="w-full" poster="video-poster.jpg" />
      <div className="mt-2 flex space-x-2">
        {Object.keys(sources).map((key) => (
          <button
            key={key}
            onClick={() => setQuality(key)}
            className={`px-4 py-2 rounded ${quality === key ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
