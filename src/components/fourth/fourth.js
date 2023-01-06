import React from 'react'
import MyHeader from '../header/myHeader'
import './fourth.scss'
import UXOrigSample from '../samples/uxSampleOrig'

function Fourth() {
  return (
    <div>
      <MyHeader
        headerName="Sample React App"
        pageName="UX Original examples"
      />
      <hr />
      <UXOrigSample />
    </div>
  )
}

export default Fourth
