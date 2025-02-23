import { useState } from 'react';

export default function AudioPlayerWithPlaylist() {
  const playlist = [
    { title: 'Song One', src: 'song1.mp3' },
    { title: 'Song Two', src: 'song2.mp3' },
    { title: 'Song Three', src: 'song3.mp3' },
  ];
  const [current, setCurrent] = useState(0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <audio controls src={playlist[current].src} className="w-full" />
      <ul className="mt-4">
        {playlist.map((song, index) => (
          <li key={index} className={`cursor-pointer p-2 ${current === index ? 'bg-blue-100' : ''}`}
              onClick={() => setCurrent(index)}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
