import { useState, useRef } from 'react';

export default function CustomAudioPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
      <audio ref={audioRef} src="audio-file.mp3" preload="metadata" />
      <button onClick={togglePlay} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}
