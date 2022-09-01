import React from 'react'
import './table.scss'

function MyTable() {
  const headerCols = [
    'ID',
    'First Name',
    'Second Name',
    'Active',
    'Salary'
  ]

  const mainData = [
    {
      id: 11111,
      firstName: 'Jim',
      secondName: 'McCloskey',
      active: true,
      salary: 20000
    },
    {
      id: 222222,
      firstName: 'Phil',
      secondName: 'Miller',
      active: true,
      salary: 23000
    },
    {
      id: 333333,
      firstName: 'Jimmy',
      secondName: 'Pesto',
      active: false,
      salary: 22000
    }
  ]

  return (
    <table className="myTable">
      <thead>
        <tr>
          {headerCols.map((col) => (
            <td>
              {col}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data Cell 1</td>
          <td>Data Cell 2</td>
          <td>Data Cell 3</td>
          <td>Data Cell 4</td>
          <td>Data Cell 5</td>
        </tr>
        <tr>
          <td>Data Cell 6</td>
          <td>Data Cell 7</td>
          <td>Data Cell 8</td>
          <td>Data Cell 9</td>
          <td>Data Cell 10</td>
        </tr>
        {/* {mainData.map((data) => (
          <tr key={data.id}>
            {Object.entries(data).map(([prop, value]) => (
              <td>{value}</td>
            ))}
          </tr>
        ))} */}
      </tbody>
    </table>
  )
}

export default MyTable
