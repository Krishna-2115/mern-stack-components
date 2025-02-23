import { useRef } from 'react';

export default function VideoPlayerFullscreen() {
  const videoContainerRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div ref={videoContainerRef} className="p-4 bg-white rounded-lg shadow-md">
      <video controls src="video-file.mp4" className="w-full" poster="video-poster.jpg" />
      <button onClick={toggleFullscreen} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Toggle Fullscreen
      </button>
    </div>
  );
}
