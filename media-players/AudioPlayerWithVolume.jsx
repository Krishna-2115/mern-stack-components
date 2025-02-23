import { useRef, useState } from 'react';

export default function AudioPlayerWithVolume() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <audio ref={audioRef} controls src="audio-file.mp3" className="w-full" />
      <div className="mt-2">
        <label className="mr-2">Volume:</label>
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
      </div>
    </div>
  );
}
