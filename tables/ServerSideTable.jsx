import { useState, useEffect } from 'react';

export default function ServerSideTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate server-side fetch
  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, name: 'Alice', status: 'Active' },
        { id: 2, name: 'Bob', status: 'Inactive' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 bg-white rounded shadow overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id} className="border-b">
              <td className="px-4 py-2">{row.id}</td>
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
