import { useState } from 'react';

export default function SearchSuggestions() {
  const suggestions = ['Paris', 'London', 'New York', 'Tokyo'];
  const [query, setQuery] = useState('');
  const filtered = suggestions.filter(city =>
    city.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <div className="p-4 relative">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search cities..."
        className="w-full px-3 py-2 border rounded"
      />
      {query && (
        <ul className="absolute left-0 right-0 bg-white border mt-1 rounded shadow">
          {filtered.map((city, i) => (
            <li key={i} className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setQuery(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
