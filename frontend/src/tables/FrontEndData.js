import React from 'react'
import { useTable, useSortBy } from 'react-table'
import { isUrl } from '../utils/general'
import { useHistory } from 'react-router-dom'
import './tables.css';

export default function FrontEndsTable({ data }) {
  let history = useHistory();

  function handleClick(config) {
    history.push("/front_end?config=" + config);
  }

  const columns = React.useMemo(
    () => [
      {
        Header: 'FrontEnd',
        accessor: 'SN',
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
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 👇'
                            : ' ☝️'
                          : ' 😐'}
                      </span>
                    </th>
                  ))}
              </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr onClick={() => handleClick(row.original.config)} {...row.getRowProps()}>
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