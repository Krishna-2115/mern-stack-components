export default function FixedColumnTable() {
    const data = [
      { id: 1, name: 'Alice', age: 25, city: 'New York' },
      { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
    ];
  
    return (
      <div className="overflow-x-auto p-4 bg-white rounded shadow">
        <table className="min-w-full table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/4 px-4 py-2">ID</th>
              <th className="w-1/4 px-4 py-2">Name</th>
              <th className="w-1/4 px-4 py-2">Age</th>
              <th className="w-1/4 px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id} className="border-b">
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.age}</td>
                <td className="px-4 py-2">{row.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  