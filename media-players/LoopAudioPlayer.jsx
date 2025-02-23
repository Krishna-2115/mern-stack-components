import { useRef, useState } from 'react';

export default function LoopAudioPlayer() {
  const audioRef = useRef(null);
  const [loop, setLoop] = useState(false);

  const toggleLoop = () => {
    setLoop(!loop);
    audioRef.current.loop = !loop;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <audio ref={audioRef} controls src="audio-file.mp3" className="w-full" />
      <button onClick={toggleLoop} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        {loop ? 'Disable Loop' : 'Enable Loop'}
      </button>
    </div>
  );
}
