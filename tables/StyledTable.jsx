export default function StyledTable() {
    const data = [
      { id: 1, name: 'Alice', status: 'Active' },
      { id: 2, name: 'Bob', status: 'Inactive' },
    ];
  
    return (
      <div className="p-4 bg-white rounded shadow">
        <table className="min-w-full">
          <thead className="bg-indigo-500 text-white">
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
                <td className="px-4 py-2">
                  <span className={row.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  