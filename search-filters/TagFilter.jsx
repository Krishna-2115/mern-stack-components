import { useState } from 'react';

export default function TagFilter() {
  const tags = ['JavaScript', 'React', 'Node.js', 'CSS'];
  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = tag => {
    setActiveTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <button
            key={i}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded border ${
              activeTags.includes(tag)
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="mt-2 text-gray-600">
        Active Tags: {activeTags.join(', ') || 'None'}
      </p>
    </div>
  );
}
