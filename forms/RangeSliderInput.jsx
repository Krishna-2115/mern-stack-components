import React, { useState } from 'react';

const RangeSliderInput = ({ label, min, max }) => {
  const [value, setValue] = useState((min + max) / 2);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}: {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default RangeSliderInput;
