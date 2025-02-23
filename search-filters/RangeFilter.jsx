import { useState } from 'react';

export default function RangeFilter() {
  const [range, setRange] = useState(50);

  return (
    <div className="p-4">
      <label className="block mb-2">Filter by value: {range}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={range}
        onChange={e => setRange(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
