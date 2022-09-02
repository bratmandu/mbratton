import { any, arrayOf, objectOf } from 'prop-types'
import React from 'react'
import './table.scss'

export default function MyTable(props) {
  const { tableData } = props
  const headerCols = [
    'ID',
    'First Name',
    'Second Name',
    'Active',
    'Salary'
  ]

  console.log('tableData: ', tableData)

  return (
    <table className="myTable">
      <thead>
        <tr>
          {headerCols.map((col) => (
            <td key={col}>
              {col}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <tr key={data.id}>
            {Object.entries(data).map(([prop, value]) => (
              <td key={`td-${value}`}>
                {value.toString()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

MyTable.propTypes = {
  tableData: arrayOf(objectOf(any))
}

MyTable.defaultProps = {
  tableData: []
}
