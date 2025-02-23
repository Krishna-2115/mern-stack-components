import { useState } from 'react';

export default function KeyboardAutocomplete() {
  const suggestions = ['Alpha', 'Beta', 'Gamma', 'Delta'];
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const filtered = suggestions.filter(s =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = e => {
    if (e.key === 'ArrowDown') {
      setActiveIndex(prev => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      setActiveIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      setQuery(filtered[activeIndex]);
      setActiveIndex(-1);
    }
  };

  return (
    <div className="p-4 relative">
      <input
        type="text"
        value={query}
        onChange={e => { setQuery(e.target.value); setActiveIndex(-1); }}
        onKeyDown={handleKeyDown}
        placeholder="Autocomplete with keyboard..."
        className="w-full px-3 py-2 border rounded"
      />
      {query && (
        <ul className="absolute left-0 right-0 bg-white border mt-1 rounded shadow">
          {filtered.map((item, i) => (
            <li
              key={i}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${i === activeIndex ? 'bg-blue-100' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setQuery(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
