import React, {
  useState, useEffect
} from 'react'
import MyTable from '../table/myTable'
import MyHeader from '../header/myHeader'
import './main.scss'

function Main() {
  const [tableData, setTableData] = useState([])
  const siteCode = '713a6c1a-a5da-42d6-ae57-58f513ab838d'
  const myUrl = `https://run.mocky.io/v3/${siteCode}`

  useEffect(() => {
    console.log('I am a use effect hook!')
    fetch(myUrl)
      .then((response) => response.json())
      .then((data) => {
        if (tableData.length === 0) {
          setTableData(data)
        }
      })
  })

  return (
    <div>
      <MyHeader
        headerName="Employee Records"
      />
      <MyTable
        tableData={tableData}
      />
    </div>
  )
}

export default Main
