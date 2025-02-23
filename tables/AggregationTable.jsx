export default function AggregationTable() {
    const data = [
      { id: 1, category: 'A', value: 10 },
      { id: 2, category: 'B', value: 20 },
      { id: 3, category: 'A', value: 15 },
      { id: 4, category: 'B', value: 25 },
    ];
  
    const totals = data.reduce((acc, row) => {
      acc[row.category] = (acc[row.category] || 0) + row.value;
      return acc;
    }, {});
  
    return (
      <div className="p-4 bg-white rounded shadow">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Total Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(totals).map(([category, total]) => (
              <tr key={category} className="border-b">
                <td className="px-4 py-2">{category}</td>
                <td className="px-4 py-2">{total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  