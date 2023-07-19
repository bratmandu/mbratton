import React from 'react'
import { v1 as uuid } from 'uuid'
import loopsA from './images/loops-a.png'
import loopsB from './images/loops-b.png'

function JsonLoopSamplesOptimised() {
  const headerCols = [
    'ID',
    'First Name',
    'Last Name',
    'Salary'
  ]

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
    <div className="w-75">
      <h1>Looping over JSON</h1>
      <p>
        This is a simple example to show how the ES6 array map feature can make writing
        jsx much more efficient. I also use the Object.entries function to iterate over objects
        which make up the array items.
      </p>
      <table className="mb-3">
        <thead>
          <tr>
            {headerCols.map((col) => (
              <td key={uuid()}>
                {col}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {sampleJson.map((data) => (
            <tr key={uuid()}>
              {Object.entries(data).map(([id, value]) => (
                <td key={id}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row pt-3">
        <div className="col col-lg-6 col-12 p-0 m-0 pb-3 d-flex justify-content-center">
          <div className="card me-3 mb-3 col col-lg-6 col-12">
            <img className="card-img-top p-3 pb-0" src={loopsA} alt="JSON loop examples" />
            <div className="card-body">
              <p className="card-text">
                The arrays used to iterate over. Without map and Object.entries, we would
                have to repeat the table tr and td code for each item in the arrays.
              </p>
            </div>
          </div>
        </div>
        <div className="col col-lg-6 col-12 p-0 m-0 pb-3 d-flex justify-content-center">
          <div className="card me-3 mb-3 col col-12">
            <img className="card-img-top p-3 pb-0" src={loopsB} alt="JSON loop examples" />
            <div className="card-body">
              <p className="card-text">
                Using map and Object.entries we can easily iterate the jsx markup without
                all the extra code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JsonLoopSamplesOptimised
