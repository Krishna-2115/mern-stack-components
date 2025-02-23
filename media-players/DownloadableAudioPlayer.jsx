export default function DownloadableAudioPlayer() {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <audio controls src="audio-file.mp3" className="w-full" />
        <a href="audio-file.mp3" download className="mt-2 inline-block px-4 py-2 bg-green-500 text-white rounded">
          Download Audio
        </a>
      </div>
    );
  }
  