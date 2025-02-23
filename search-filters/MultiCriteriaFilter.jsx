import { useState } from 'react';

export default function MultiCriteriaFilter() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const categories = ['Technology', 'Health', 'Finance'];

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Search keyword..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      >
        <option value="">Select Category</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>
      <p className="text-gray-600">
        Searching for "{query}" in {category || 'all categories'}
      </p>
    </div>
  );
}
