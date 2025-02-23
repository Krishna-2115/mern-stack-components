import { useState } from 'react';

export default function FilterChips() {
  const chips = ['New', 'Popular', 'Trending', 'Featured'];
  const [activeChips, setActiveChips] = useState([]);

  const toggleChip = chip => {
    setActiveChips(prev =>
      prev.includes(chip)
        ? prev.filter(c => c !== chip)
        : [...prev, chip]
    );
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {chips.map((chip, i) => (
          <button
            key={i}
            onClick={() => toggleChip(chip)}
            className={`px-3 py-1 rounded-full border ${
              activeChips.includes(chip)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {chip}
          </button>
        ))}
      </div>
      <p className="mt-2 text-gray-600">Active Filters: {activeChips.join(', ') || 'None'}</p>
    </div>
  );
}
