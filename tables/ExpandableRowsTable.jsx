import { useState } from 'react';

export default function ExpandableRowsTable() {
  const data = [
    { id: 1, name: 'Alice', details: 'Alice details here' },
    { id: 2, name: 'Bob', details: 'Bob details here' },
  ];
  const [openRow, setOpenRow] = useState(null);

  return (
    <div className="p-4 bg-white rounded shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <React.Fragment key={row.id}>
              <tr className="border-b">
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">
                  <button onClick={() => setOpenRow(openRow === row.id ? null : row.id)} className="text-blue-500">
                    {openRow === row.id ? 'Collapse' : 'Expand'}
                  </button>
                </td>
              </tr>
              {openRow === row.id && (
                <tr className="bg-gray-50">
                  <td colSpan="3" className="px-4 py-2">{row.details}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
