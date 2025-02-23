import { useState } from 'react';

export default function SearchWithClear() {
  const [query, setQuery] = useState('');

  return (
    <div className="p-4 flex items-center">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1 px-3 py-2 border rounded"
      />
      {query && (
        <button onClick={() => setQuery('')} className="ml-2 px-3 py-2 bg-red-500 text-white rounded">
          Clear
        </button>
      )}
    </div>
  );
}
