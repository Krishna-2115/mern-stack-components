export default function SimpleVideoPlayer() {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <video controls className="w-full" poster="video-poster.jpg">
          <source src="video-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  