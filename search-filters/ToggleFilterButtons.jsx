import { useState } from 'react';

export default function ToggleFilterButtons() {
  const filters = ['All', 'Active', 'Completed'];
  const [active, setActive] = useState('All');

  return (
    <div className="p-4 flex space-x-2">
      {filters.map((filter, i) => (
        <button
          key={i}
          onClick={() => setActive(filter)}
          className={`px-4 py-2 rounded ${active === filter ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
