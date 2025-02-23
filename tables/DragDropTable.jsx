import { useState } from 'react';

export default function DragDropTable() {
  const initialData = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  const [data, setData] = useState(initialData);
  const [dragged, setDragged] = useState(null);

  const handleDragStart = (index) => setDragged(index);
  const handleDrop = (index) => {
    const newData = [...data];
    const draggedItem = newData.splice(dragged, 1)[0];
    newData.splice(index, 0, draggedItem);
    setData(newData);
    setDragged(null);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Order</th>
            <th className="px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              className="border-b"
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
