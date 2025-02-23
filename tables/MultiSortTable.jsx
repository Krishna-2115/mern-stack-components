import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

export default function MultiSortTable() {
  const data = useMemo(
    () => [
      { id: 1, name: 'Alice', score: 90 },
      { id: 2, name: 'Bob', score: 85 },
      { id: 3, name: 'Charlie', score: 90 },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Score', accessor: 'score' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, disableSortRemove: false }, useSortBy);

  return (
    <div className="overflow-x-auto p-4 bg-white rounded shadow">
      <table {...getTableProps()} className="min-w-full">
        <thead className="bg-gray-100">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-4 py-2"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
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
  );
}
