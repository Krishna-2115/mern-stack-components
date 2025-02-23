import { useState } from 'react';

export default function CategoryFilterSearch() {
  const categories = ['Books', 'Movies', 'Music'];
  const [selectedCat, setSelectedCat] = useState('');
  const [query, setQuery] = useState('');

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-3 py-2 border rounded"
      />
      <div className="flex space-x-4">
        {categories.map((cat, i) => (
          <label key={i} className="inline-flex items-center">
            <input
              type="radio"
              name="category"
              value={cat}
              checked={selectedCat === cat}
              onChange={() => setSelectedCat(cat)}
              className="form-radio"
            />
            <span className="ml-2">{cat}</span>
          </label>
        ))}
      </div>
      <p className="text-gray-600">
        Searching for "{query}" in {selectedCat || 'all categories'}
      </p>
    </div>
  );
}
