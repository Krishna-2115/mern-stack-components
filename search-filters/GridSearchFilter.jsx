import { useState } from 'react';

export default function GridSearchFilter() {
  const items = ['Alpha', 'Beta', 'Gamma', 'Delta'];
  const [query, setQuery] = useState('');
  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <div className="grid grid-cols-2 gap-4">
        {filtered.map((item, i) => (
          <div key={i} className="p-4 border rounded text-center">{item}</div>
        ))}
      </div>
    </div>
  );
}
