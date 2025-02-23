import { useState } from 'react';

export default function LazyLoadVideoPlayer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {!loaded && (
        <button onClick={() => setLoaded(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Load Video
        </button>
      )}
      {loaded && (
        <video controls src="video-file.mp4" className="w-full" poster="video-poster.jpg" />
      )}
    </div>
  );
}
