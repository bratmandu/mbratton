import React, {
  useState
} from 'react'
import _ from 'lodash'
import MyHeader from '../standard/header/myHeader'

function ArrayOperationSamples() {
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

  const [mainData, setMainData] = useState(sampleJson)

  const logMainData = () => {
    console.log('current table data: ', mainData)
  }

  const logReversedData = () => {
    console.log('current table data reversed: ', mainData.sort().reverse())
  }

  const lastName = (a, b) => {
    if (a.lastName < b.lastName) {
      return -1
    }
    if (a.lastName > b.lastName) {
      return 1
    }
    return 0
  }

  const logDataSortedByLastName = () => {
    console.log('sorted by last name asc: ', mainData.sort(lastName))
  }

  const logDataSortedByLastNameAlt = () => {
    console.log('sorted by last name asc (lodash): ', _.sortBy(mainData, 'lastName'))
  }

  const logDataWhereSalary27kOrOver = () => {
    console.log('filtered where salary >= 27k: ', mainData.filter((data) => ((data.salary >= 27000))))
  }

  const logDataWhereLastNameSmith = () => {
    console.log('filtered where last name = Smith: ', mainData.filter((data) => ((data.lastName === 'Smith'))))
  }

  return (
    <>
      <MyHeader
        pageName="Array Operation examples"
      />
      <button
        type="button"
        onClick={() => {
          logMainData()
        }}
      >
        Log main Data json
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          logReversedData()
        }}
      >
        Log Data Reversed
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          logDataSortedByLastName()
        }}
      >
        Log Data Sorted By last name
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          logDataSortedByLastNameAlt()
        }}
      >
        Log Data Sorted By last name Lodash
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          logDataWhereSalary27kOrOver()
        }}
      >
        Log Data Filtered By Salary 27k or greater
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          logDataWhereLastNameSmith()
        }}
      >
        Log Data where last name is Smith
      </button>
    </>
  )
}

export default ArrayOperationSamples
