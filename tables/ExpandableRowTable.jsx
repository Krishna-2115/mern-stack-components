import { useState } from 'react';

export default function ExpandableRowTable() {
  const data = [
    { id: 1, name: 'Alice', age: 25, details: 'Additional info about Alice.' },
    { id: 2, name: 'Bob', age: 30, details: 'Additional info about Bob.' },
  ];
  const [expanded, setExpanded] = useState({});

  const toggleRow = id => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <React.Fragment key={row.id}>
                <tr className="border-b">
                  <td className="px-4 py-2">{row.id}</td>
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.age}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => toggleRow(row.id)} className="text-blue-500">
                      {expanded[row.id] ? 'Hide' : 'Show'} Details
                    </button>
                  </td>
                </tr>
                {expanded[row.id] && (
                  <tr className="bg-gray-50">
                    <td colSpan="4" className="px-4 py-2">
                      {row.details}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
