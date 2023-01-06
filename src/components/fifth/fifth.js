import React from 'react'
import MyHeader from '../header/myHeader'
import './fifth.scss'
import UXStrippedSample from '../samples/uxSampleStripped'

function Fifth() {
  return (
    <div>
      <MyHeader
        headerName="Sample React App"
        pageName="UX Stripped example"
      />
      <UXStrippedSample />
    </div>
  )
}

export default Fifth
