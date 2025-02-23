import { useState } from 'react';

export default function AutocompleteStatic() {
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  const [query, setQuery] = useState('');
  const filtered = suggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 relative">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search fruits..."
        className="w-full px-3 py-2 border rounded"
      />
      {query && (
        <ul className="absolute left-0 right-0 bg-white border mt-1 rounded shadow">
          {filtered.map((item, i) => (
            <li key={i} className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setQuery(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
