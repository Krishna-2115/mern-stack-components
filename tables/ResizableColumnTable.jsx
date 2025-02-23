import { useState } from 'react';

export default function ResizableColumnTable() {
  const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
  ];
  const [colWidth, setColWidth] = useState(150);

  return (
    <div className="overflow-x-auto p-4 bg-white rounded shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th style={{ width: colWidth }} className="px-4 py-2">ID</th>
            <th style={{ width: colWidth }} className="px-4 py-2">Name</th>
            <th style={{ width: colWidth }} className="px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id} className="border-b">
              <td style={{ width: colWidth }} className="px-4 py-2">{row.id}</td>
              <td style={{ width: colWidth }} className="px-4 py-2">{row.name}</td>
              <td style={{ width: colWidth }} className="px-4 py-2">{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <label>Column Width: </label>
        <input
          type="range"
          min="100"
          max="300"
          value={colWidth}
          onChange={e => setColWidth(Number(e.target.value))}
          className="ml-2"
        />
      </div>
    </div>
  );
}
