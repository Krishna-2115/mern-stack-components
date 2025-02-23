import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import 'tailwindcss/tailwind.css';

export default function MaterialUITable() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 110 },
  ];

  const rows = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
  ];

  return (
    <div className="p-4 bg-white rounded shadow" style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
