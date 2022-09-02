import React, {
  useState, useEffect
} from 'react'
import MyTable from '../table/myTable'
import MyHeader from '../header/myHeader'
import './main.scss'

function Main() {
  const [tableData, setTableData] = useState([])

  const myUrl = 'https://run.mocky.io/v3/198ec2ca-fe61-46d4-b0a6-b2067452c0b1'

  useEffect(() => {
    console.log('I am use effect hook!')
    fetch(myUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data)
      })
  })

  return (
    <div>
      <MyHeader
        headerName="Employee Records"
      />
      <MyTable />
    </div>
  )
}

export default Main
