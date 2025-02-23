import { useState } from 'react';

export default function RecentSearches() {
  const [query, setQuery] = useState('');
  const recent = ['React', 'Vue', 'Angular'];

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-3 py-2 border rounded mb-2"
      />
      <div className="text-gray-600">
        Recent Searches: {recent.join(', ')}
      </div>
    </div>
  );
}
