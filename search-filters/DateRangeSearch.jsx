import { useState } from 'react';

export default function DateRangeSearch() {
  const [query, setQuery] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      <div className="flex space-x-4">
        <input
          type="date"
          value={start}
          onChange={e => setStart(e.target.value)}
          className="px-3 py-2 border rounded"
        />
        <input
          type="date"
          value={end}
          onChange={e => setEnd(e.target.value)}
          className="px-3 py-2 border rounded"
        />
      </div>
      <p className="text-gray-600">
        Query: {query} | Date Range: {start || 'Any'} - {end || 'Any'}
      </p>
    </div>
  );
}
