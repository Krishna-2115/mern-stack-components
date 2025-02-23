export default function CustomHTML5VideoPlayer() {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <video controls className="w-full" poster="video-poster.jpg">
          <source src="video-file.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }
  