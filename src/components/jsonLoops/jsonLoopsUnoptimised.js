import React from 'react'
import MyHeader from '../standard/header/myHeader'

function JsonLoopSamplesUnoptimised() {
  const sampleJson = [
    {
      id: 0,
      firstName: 'Joe',
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
    <div>
      <MyHeader
        pageName="JSON Loop examples poor"
      />
      <table>
        <thead>
          <tr>
            <td>
              ID
            </td>
            <td>
              First Name
            </td>
            <td>
              Last Name
            </td>
            <td>
              Salary
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {sampleJson[0].id}
            </td>
            <td>
              {sampleJson[0].firstName}
            </td>
            <td>
              {sampleJson[0].lastName}
            </td>
            <td>
              {sampleJson[0].salary}
            </td>
          </tr>
          <tr>
            <td>
              {sampleJson[1].id}
            </td>
            <td>
              {sampleJson[1].firstName}
            </td>
            <td>
              {sampleJson[1].lastName}
            </td>
            <td>
              {sampleJson[1].salary}
            </td>
          </tr>
          <tr>
            <td>
              {sampleJson[2].id}
            </td>
            <td>
              {sampleJson[2].firstName}
            </td>
            <td>
              {sampleJson[2].lastName}
            </td>
            <td>
              {sampleJson[2].salary}
            </td>
          </tr>
          <tr>
            <td>
              {sampleJson[3].id}
            </td>
            <td>
              {sampleJson[3].firstName}
            </td>
            <td>
              {sampleJson[3].lastName}
            </td>
            <td>
              {sampleJson[3].salary}
            </td>
          </tr>
          <tr>
            <td>
              {sampleJson[4].id}
            </td>
            <td>
              {sampleJson[4].firstName}
            </td>
            <td>
              {sampleJson[4].lastName}
            </td>
            <td>
              {sampleJson[4].salary}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default JsonLoopSamplesUnoptimised
