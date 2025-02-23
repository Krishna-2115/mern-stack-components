import { useState } from 'react';

export default function ModalSearchFilter() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <div className="p-4">
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Search Filter
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded w-80">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-4"
            />
            <button onClick={() => setOpen(false)} className="w-full px-4 py-2 bg-green-500 text-white rounded">
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
