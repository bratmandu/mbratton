import React, {
  useState
} from 'react'
import _ from 'lodash'
import arraysA from './images/arrays-a.png'

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
    setMainData(sampleJson)
  }

  const logReversedData = () => {
    const reverseArray = [...sampleJson].reverse()
    setMainData(reverseArray)
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
    const byLastName = [...sampleJson].sort(lastName)
    setMainData(byLastName)
  }

  const logDataSortedByLastNameAlt = () => {
    const byLastNameLodash = _.sortBy(mainData, 'lastName')
    setMainData(byLastNameLodash)
  }

  const logDataWhereSalary27kOrOver = () => {
    const bySalary = [...sampleJson].filter((data) => ((data.salary >= 27000)))
    setMainData(bySalary)
  }

  const logDataWhereLastNameSmith = () => {
    const isSmith = [...sampleJson].filter((data) => ((data.lastName === 'Smith')))
    setMainData(isSmith)
  }

  return (
    <div className="w-75">
      <h1>Array operations</h1>
      <p>
        A common interview question for a front end position often includes queries about array operations.
        In practice, I will often use lodash or similar libraries for array filtering, etc. But it is good
        to have a grasp of the basics.
      </p>
      <p>
        Here, I have a number of buttons which will simply show the array in various arrangements, sorted
        and filtered. I have used lodash and vanilla js for these to show how much easier it is with lodash!
      </p>
      <div className="row">
        <div className="col col-lg-6 col-12 p-0 m-0">
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              logMainData()
            }}
          >
            Log main Data json
          </button>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              logReversedData()
            }}
          >
            Log Data Reversed
          </button>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              logDataSortedByLastName()
            }}
          >
            Log Data Sorted By last name
          </button>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              logDataSortedByLastNameAlt()
            }}
          >
            Log Data Sorted By last name Lodash
          </button>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              logDataWhereSalary27kOrOver()
            }}
          >
            Log Data Filtered By Salary 27k or greater
          </button>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              logDataWhereLastNameSmith()
            }}
          >
            Log Data where last name is Smith
          </button>
        </div>
        <div className="col col-lg-6 col-12 p-0 m-0 pt-3">
          <h2>
            Current Array:
          </h2>
          <p className="text-break">
            {JSON.stringify(mainData).slice(1, JSON.stringify(mainData).length - 1)}
          </p>
          <div className="card mb-img-card me-3 mb-3 w-100">
            <img className="card-img-top p-3 pb-0" src={arraysA} alt="Array operation examples" />
            <div className="card-body">
              <p className="card-text">
                The vanailla js and lodash code to achieve the same effects
                without the need for a separate sorting method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArrayOperationSamples
