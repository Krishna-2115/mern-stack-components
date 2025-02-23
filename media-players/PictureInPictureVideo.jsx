import { useRef } from 'react';

export default function PictureInPictureVideo() {
  const videoRef = useRef(null);

  const togglePiP = async () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else if (videoRef.current.requestPictureInPicture) {
      await videoRef.current.requestPictureInPicture();
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <video ref={videoRef} controls src="video-file.mp4" className="w-full" poster="video-poster.jpg" />
      <button onClick={togglePiP} className="mt-2 px-4 py-2 bg-purple-500 text-white rounded">
        Toggle PiP
      </button>
    </div>
  );
}
