import { useMemo, useState } from 'react';
import { useTable, useGlobalFilter } from 'react-table';

export default function TableWithGlobalFilter() {
  const data = useMemo(
    () => [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 22 },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter);

  return (
    <div className="p-4 bg-white rounded shadow">
      <input
        value={state.globalFilter || ''}
        onChange={e => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        className="mb-4 px-3 py-2 border rounded w-full"
      />
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className="px-4 py-2">
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-b">
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="px-4 py-2">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
