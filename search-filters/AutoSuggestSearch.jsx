import { useState } from 'react';

export default function AutosuggestSearch() {
  const suggestions = ['React', 'Angular', 'Vue', 'Svelte'];
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState([]);

  const onChange = e => {
    const input = e.target.value;
    setValue(input);
    setFiltered(suggestions.filter(s => s.toLowerCase().includes(input.toLowerCase())));
  };

  return (
    <div className="p-4 relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Framework..."
        className="w-full px-3 py-2 border rounded"
      />
      {value && filtered.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border mt-1 rounded shadow">
          {filtered.map((item, i) => (
            <li key={i} className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setValue(item); setFiltered([]); }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
