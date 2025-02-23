import { useRef, useState, useEffect } from 'react';

export default function VideoPlayerWithSeek() {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };
    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <video ref={videoRef} controls src="video-file.mp4" className="w-full" poster="video-poster.jpg" />
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        className="w-full mt-2"
        min="0"
        max="100"
      />
    </div>
  );
}
