export default function AudioEqualizerPlayer() {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <audio controls src="audio-file.mp3" className="w-full" />
        <div className="mt-4 grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((bar) => (
            <div key={bar} className="h-10 bg-blue-500 rounded"></div>
          ))}
        </div>
      </div>
    );
  }
  