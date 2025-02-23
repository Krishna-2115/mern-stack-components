import { useState } from 'react';

export default function SearchWithSort() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('asc');

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      <div>
        <label className="mr-2">Sort:</label>
        <select value={sort} onChange={e => setSort(e.target.value)} className="px-3 py-2 border rounded">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <p className="text-gray-600">Query: {query} | Sort: {sort}</p>
    </div>
  );
}
