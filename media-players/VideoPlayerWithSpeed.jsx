import { useRef, useState } from 'react';

export default function VideoPlayerWithSpeed() {
  const videoRef = useRef(null);
  const [speed, setSpeed] = useState(1);

  const handleSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    setSpeed(newSpeed);
    videoRef.current.playbackRate = newSpeed;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <video ref={videoRef} controls src="video-file.mp4" className="w-full" poster="video-poster.jpg" />
      <div className="mt-2">
        <label className="mr-2">Playback Speed:</label>
        <select value={speed} onChange={handleSpeedChange} className="border rounded p-1">
          <option value={0.5}>0.5x</option>
          <option value={1}>1x</option>
          <option value={1.5}>1.5x</option>
          <option value={2}>2x</option>
        </select>
      </div>
    </div>
  );
}
