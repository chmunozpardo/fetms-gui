import React, { Component } from 'react'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

export default function YFactorTable({ data }) {
  const columns = React.useMemo(
    () => [{
      Header: 'FreqLO',
      accessor: 'FreqLO',
    },
    {
      Header: 'IFChannel',
      accessor: 'IFChannel',
    },
    {
      Header: 'IFChannel',
      accessor: 'IFChannel',
    },
    {
      Header: 'IFChannel',
      accessor: 'IFChannel',
    },
    {
      Header: 'Timestamp',
      accessor: 'TS ',
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
  )
}