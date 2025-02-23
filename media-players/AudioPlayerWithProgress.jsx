import { useRef, useState, useEffect } from 'react';

export default function AudioPlayerWithProgress() {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };
    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <audio ref={audioRef} controls src="audio-file.mp3" className="w-full" />
      <div className="mt-2 h-2 w-full bg-gray-200 rounded">
        <div style={{ width: `${progress}%` }} className="h-full bg-blue-500 rounded"></div>
      </div>
    </div>
  );
}
