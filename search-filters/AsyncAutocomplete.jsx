import { useState, useEffect } from 'react';

export default function AsyncAutocomplete() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 1) {
      // Simulate API call
      setTimeout(() => {
        setSuggestions(
          ['Async One', 'Async Two', 'Async Three'].filter(s =>
            s.toLowerCase().includes(query.toLowerCase())
          )
        );
      }, 500);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="p-4 relative">
      <input
        type="text"
        placeholder="Async autocomplete..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border mt-1 rounded shadow">
          {suggestions.map((item, i) => (
            <li key={i} className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setQuery(item); setSuggestions([]); }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
