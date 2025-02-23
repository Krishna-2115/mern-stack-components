import { FixedSizeList as List } from 'react-window';

export default function VirtualizedTable() {
  const data = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

  const Row = ({ index, style }) => {
    const row = data[index];
    return (
      <div style={style} className="flex border-b">
        <div className="w-1/4 px-4 py-2">{row.id}</div>
        <div className="w-3/4 px-4 py-2">{row.name}</div>
      </div>
    );
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="font-bold flex border-b bg-gray-100">
        <div className="w-1/4 px-4 py-2">ID</div>
        <div className="w-3/4 px-4 py-2">Name</div>
      </div>
      <List height={300} itemCount={data.length} itemSize={35} width="100%" >
        {Row}
      </List>
    </div>
  );
}
