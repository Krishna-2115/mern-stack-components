import { useRef, useState } from 'react';

export default function VideoPlayerCustomControls() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <video ref={videoRef} src="video-file.mp4" className="w-full" poster="video-poster.jpg" />
      <button onClick={togglePlay} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}
