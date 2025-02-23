import { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';

export default function PaginatedTable() {
  const data = useMemo(
    () => Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Name ${i + 1}` })),
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable({ columns, data, initialState: { pageSize: 10 } }, usePagination);

  return (
    <div className="p-4 bg-white rounded shadow">
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
            {page.map(row => {
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
      <div className="mt-4 flex justify-between items-center">
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="px-3 py-1 bg-gray-200 rounded">
          Previous
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage} className="px-3 py-1 bg-gray-200 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
