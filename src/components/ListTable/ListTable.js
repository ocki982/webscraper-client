import React from 'react';
import { useExpanded, useGroupBy, useSortBy, useTable } from 'react-table';

export default function ProductTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useGroupBy, useSortBy, useExpanded);

  return (
    <table className='table' {...getTableProps()}>
      <thead className='table__header'>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className='table__title' {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.canGroupBy  === 'category' ? (
                  <div {...column.getGroupByToggleProps()}>
                    {' '}
                    {column.isGrouped ? '+' : '-'}
                  </div>
                ) : null}

                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className='table__body'{...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className='table__cell' {...cell.getCellProps()}>
                    {cell.isGrouped ? (
                      <>
                        <div {...row.getToggleRowExpandedProps()}>
                          {row.isExpanded ? '-' : '+'}
                        </div>{' '}
                        {cell.render('Cell')} ({row.subRows.length})
                      </>
                    ) : cell.isPlaceholder ? null : ( 
                      cell.render('Cell')
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}