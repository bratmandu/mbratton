import React from 'react'
import './samples.scss'

function UXOrigSample() {
  const headerCols = [
    'ID',
    'First Name',
    'Last Name',
    'Salary'
  ]

  const sampleJson = [
    {
      id: 0,
      firstName: 'Joeux',
      lastName: 'Pertwee',
      salary: 27000
    },
    {
      id: 1,
      firstName: 'Bill',
      lastName: 'Summons',
      salary: 25000
    },
    {
      id: 2,
      firstName: 'Luke',
      lastName: 'Smith',
      salary: 30000
    },
    {
      id: 3,
      firstName: 'Gordon',
      lastName: 'Smith',
      salary: 31000
    },
    {
      id: 4,
      firstName: 'Tim',
      lastName: 'Ascot',
      salary: 23000
    }
  ]

  return (
    <table>
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
        {sampleJson.map((data) => (
          <tr>
            {Object.entries(data).map(([prop, value]) => (
              <td>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UXOrigSample
