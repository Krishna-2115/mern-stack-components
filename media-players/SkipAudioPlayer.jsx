import { useRef } from 'react';

export default function SkipAudioPlayer() {
  const audioRef = useRef(null);

  const skip = (seconds) => {
    audioRef.current.currentTime += seconds;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <audio ref={audioRef} controls src="audio-file.mp3" className="w-full" />
      <div className="mt-2 flex justify-center space-x-4">
        <button onClick={() => skip(-10)} className="px-4 py-2 bg-gray-300 rounded">-10s</button>
        <button onClick={() => skip(10)} className="px-4 py-2 bg-gray-300 rounded">+10s</button>
      </div>
    </div>
  );
}
