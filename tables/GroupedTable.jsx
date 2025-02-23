export default function GroupedTable() {
    const data = [
      { id: 1, category: 'A', name: 'Alice' },
      { id: 2, category: 'A', name: 'Alan' },
      { id: 3, category: 'B', name: 'Bob' },
      { id: 4, category: 'B', name: 'Bella' },
    ];
  
    const groups = data.reduce((acc, row) => {
      acc[row.category] = acc[row.category] ? [...acc[row.category], row] : [row];
      return acc;
    }, {});
  
    return (
      <div className="p-4 bg-white rounded shadow">
        {Object.entries(groups).map(([group, rows]) => (
          <div key={group} className="mb-4">
            <h3 className="bg-gray-200 px-4 py-2">{`Category ${group}`}</h3>
            <table className="min-w-full border">
              <tbody>
                {rows.map(row => (
                  <tr key={row.id} className="border-b">
                    <td className="px-4 py-2">{row.id}</td>
                    <td className="px-4 py-2">{row.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  }
  