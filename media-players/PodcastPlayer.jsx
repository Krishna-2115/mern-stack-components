export default function PodcastPlayer() {
    const chapters = [
      { title: 'Intro', time: '00:00' },
      { title: 'Discussion', time: '05:00' },
      { title: 'Conclusion', time: '25:00' },
    ];
  
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <audio controls src="podcast.mp3" className="w-full" />
        <ul className="mt-4">
          {chapters.map((chapter, idx) => (
            <li key={idx} className="py-1 border-b">
              <span className="font-semibold">{chapter.title}</span> - {chapter.time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  