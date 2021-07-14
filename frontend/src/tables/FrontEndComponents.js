import React from 'react'
import { useTable, useSortBy } from 'react-table'
import { isUrl } from '../utils/general'
import './tables.css';

export default function FrontEndsComponents({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Component',
        accessor: 'Component',
      },
      {
        Header: 'Serial Number',
        accessor: 'SN',
      },
      {
        Header: 'ESN1',
        accessor: 'ESN1',
      },
      {
        Header: 'ESN2',
        accessor: 'ESN2',
      },
      {
        Header: 'Timestamp',
        accessor: 'TS',
      },
      {
        Header: 'Documentation',
        accessor: 'Docs',
        Cell: row => {
          if (isUrl(row.value))
            return <a href={row.value}>Link</a>
          else
            return row.value
        }
      },
      {
        Header: 'Notes',
        accessor: 'Notes',
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data }, useSortBy)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance
  return (
    <div className="asdf">
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                    </th>
                  ))}
              </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}