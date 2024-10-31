import React from 'react';
import { useTable, usePagination } from 'react-table';

const CustomTable = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize },
    page, // Get the current page of rows
    canPreviousPage,
    canNextPage,
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    // Additional props for pagination
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, // Initial state for pagination
    },
    usePagination // Use the usePagination plugin
  );

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  if (!columns || !Array.isArray(columns) || columns.length === 0) {
    return <div>No columns defined</div>;
  }

  
  return (
    <div>
      <table {...getTableProps()} className="w-full  mx-auto table-auto">
        <thead className="bg-gray-200 dark:bg-gray-700">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white dark:bg-gray-800">
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          ) : (
            page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  {row.cells.map(cell => (
                    <td
                      {...cell.getCellProps()}
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {Math.ceil(rows.length / pageSize)}
          </strong>
        </span>
        <div>
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            {'<<'}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            {'<'}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            {'>'}
          </button>
          <button
            onClick={() => gotoPage(Math.ceil(rows.length / pageSize) - 1)}
            disabled={!canNextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {'>>'}
          </button>
        </div>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
          className="ml-4 border rounded"
        >
          {[5, 10, 20, 30].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomTable;
