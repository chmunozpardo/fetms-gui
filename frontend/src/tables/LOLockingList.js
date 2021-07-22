import React from 'react'
import { useTable, useSortBy } from 'react-table'
import { useHistory } from 'react-router-dom'
import './tables.css'

export default function LOLockingList({ data }) {

  let history = useHistory();

  function handleClick(keyHeader) {
    history.push("lo_locking?keyHeader=" + keyHeader);
  }

  const columns = React.useMemo(
    () => [
      {
        Header: 'FE Config',
        accessor: 'FE_Config',
      },
      {
        Header: 'FETMS Description',
        accessor: 'FETMS_Description',
      },
      {
        Header: 'Timestamp',
        accessor: 'TS',
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
              <tr onClick={() => handleClick(row.original.keyId)} {...row.getRowProps()}>
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