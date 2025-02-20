import React, { useState } from 'react';

const DynamicFormField = ({ label, fields }) => {
  const [values, setValues] = useState([]);

  const addField = () => setValues([...values, '']);
  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {values.map((value, i) => (
        <input
          key={i}
          type="text"
          value={value}
          onChange={(e) => handleChange(i, e.target.value)}
          className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm"
        />
      ))}
      <button
        onClick={addField}
        className="mt-2 bg-green-600 text-white py-1 px-3 rounded-md hover:bg-green-700"
      >
        Add Field
      </button>
    </div>
  );
};

export default DynamicFormField;
