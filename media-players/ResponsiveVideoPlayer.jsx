import ReactPlayer from 'react-player';

export default function ResponsiveVideoPlayer() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
          controls
        />
      </div>
    </div>
  );
}
