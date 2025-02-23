import { useState } from 'react';

export default function InlineEditingTable() {
  const [data, setData] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [tempName, setTempName] = useState('');

  const startEditing = (row) => {
    setEditingId(row.id);
    setTempName(row.name);
  };

  const saveEdit = (id) => {
    setData(prev => prev.map(row => (row.id === id ? { ...row, name: tempName } : row)));
    setEditingId(null);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id} className="border-b">
              <td className="px-4 py-2">{row.id}</td>
              <td className="px-4 py-2">
                {editingId === row.id ? (
                  <input
                    value={tempName}
                    onChange={e => setTempName(e.target.value)}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  row.name
                )}
              </td>
              <td className="px-4 py-2">
                {editingId === row.id ? (
                  <button onClick={() => saveEdit(row.id)} className="px-3 py-1 bg-green-500 text-white rounded">
                    Save
                  </button>
                ) : (
                  <button onClick={() => startEditing(row)} className="px-3 py-1 bg-blue-500 text-white rounded">
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
