import React, { useState } from 'react';

const ColorPickerInput = ({ label }) => {
  const [color, setColor] = useState('#000000');

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="mt-1 w-16 h-10 border-gray-300 rounded"
      />
    </div>
  );
};

export default ColorPickerInput;
