import { useState } from 'react';

export default function EditableTable() {
  const [data, setData] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);

  const updateName = (id, value) => {
    setData(prev => prev.map(row => (row.id === id ? { ...row, name: value } : row)));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id} className="border-b">
              <td className="px-4 py-2">{row.id}</td>
              <td className="px-4 py-2">
                <input
                  value={row.name}
                  onChange={e => updateName(row.id, e.target.value)}
                  className="border rounded px-2 py-1"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
