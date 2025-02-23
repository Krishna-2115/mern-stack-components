import { useState } from 'react';

export default function FilterList() {
  const items = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
  const [query, setQuery] = useState('');
  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Filter colors..."
        className="w-full px-3 py-2 border rounded mb-4"
      />
      <ul>
        {filtered.map((item, i) => (
          <li key={i} className="px-3 py-1 border-b">{item}</li>
        ))}
      </ul>
    </div>
  );
}
