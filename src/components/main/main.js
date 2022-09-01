import React from 'react'
import MyTable from '../table/myTable'
import MyHeader from '../header/myHeader'
import './main.scss'

function Main() {
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
