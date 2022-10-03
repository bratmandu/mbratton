import { any, arrayOf, objectOf } from 'prop-types'
import React, {
  useState, useEffect
} from 'react'
import './table.scss'

export default function MyTable(props) {
  const { tableData } = props
  const [tableRows, setTableRows] = useState([])
  const [editingRow, setEditingrow] = useState(false)
  const headerCols = [
    'ID',
    'First Name',
    'Second Name',
    'Active',
    'Salary',
    'Edit',
    'Delete'
  ]

  useEffect(() => {
    console.log('I am a use effect hook to set table data based on prop!')
    setTableRows(tableData)
  }, [tableData])

  const removeRow = (rowData) => {
    setTableRows(tableRows.filter((row) => row.id !== rowData.id))
  }

  const updateRow = (value, rowData, field) => {
    const rowToUpdate = tableRows.filter((row) => (row.id === rowData.id))
    rowToUpdate[0][field] = value
  }

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
        {tableRows.map((data) => (
          <tr key={data.id}>
            {Object.entries(data).map(([prop, value]) => (
              <td
                key={`td-${value}`}
                contentEditable={data.id === editingRow}
                field={prop}
                onBlur={(event) => {
                  updateRow(event.target.innerHTML, data, prop)
                }}
              >
                {value.toString()}
              </td>
            ))}
            <td>
              <button type="button" onClick={() => { setEditingrow(data.id) }}>
                Edit Row
              </button>
            </td>
            <td>
              <button type="button" onClick={() => { removeRow(data) }}>
                Delete Row
              </button>
            </td>
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
