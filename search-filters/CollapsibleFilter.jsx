import { useState } from 'react';

export default function CollapsibleFilter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 border rounded">
      <button onClick={() => setOpen(!open)} className="text-blue-500 mb-2">
        {open ? 'Hide' : 'Show'} Advanced Filters
      </button>
      {open && (
        <div className="space-y-2">
          <input type="text" placeholder="Advanced search term" className="w-full px-3 py-2 border rounded" />
          <select className="w-full px-3 py-2 border rounded">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      )}
    </div>
  );
}
