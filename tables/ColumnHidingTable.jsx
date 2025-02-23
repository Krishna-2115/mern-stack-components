import { useState } from 'react';

export default function ColumnHidingTable() {
  const data = [
    { id: 1, name: 'Alice', age: 25, city: 'NY' },
    { id: 2, name: 'Bob', age: 30, city: 'LA' },
  ];
  const [showCity, setShowCity] = useState(true);

  return (
    <div className="p-4 bg-white rounded shadow">
      <button onClick={() => setShowCity(!showCity)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        {showCity ? 'Hide' : 'Show'} City Column
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              {showCity && <th className="px-4 py-2">City</th>}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id} className="border-b">
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.age}</td>
                {showCity && <td className="px-4 py-2">{row.city}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
