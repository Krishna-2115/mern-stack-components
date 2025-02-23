export default function StickyHeaderTable() {
    const data = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `Name ${i + 1}`,
      age: 20 + (i % 10),
    }));
  
    return (
      <div className="p-4 bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id} className="border-b">
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  