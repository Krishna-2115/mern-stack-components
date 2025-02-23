import { useState, useEffect } from 'react';

export default function DebounceSearchBar() {
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Type to search..."
        className="w-full px-3 py-2 border rounded"
      />
      <p className="mt-2 text-gray-600">Searching for: {debounced}</p>
    </div>
  );
}
