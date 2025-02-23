import { useState } from 'react';

export default function MultiSelectFilter() {
  const options = ['Option A', 'Option B', 'Option C', 'Option D'];
  const [selected, setSelected] = useState([]);

  const toggleSelect = option => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="p-4">
      <div className="border rounded p-2">
        {options.map((option, i) => (
          <label key={i} className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleSelect(option)}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      <p className="mt-2 text-gray-600">Selected: {selected.join(', ') || 'None'}</p>
    </div>
  );
}
