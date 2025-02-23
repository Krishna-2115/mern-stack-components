export default function SimpleAudioPlayer() {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <audio controls className="w-full">
          <source src="audio-file.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
  