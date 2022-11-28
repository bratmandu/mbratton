import React from 'react'
import MyHeader from '../header/myHeader'
import './third.scss'
import JsonLoopSamples from '../samples/loopingOverJson'

function Second() {
  return (
    <div>
      <MyHeader
        headerName="Sample React App"
        pageName="JSON Loop examples"
      />
      <JsonLoopSamples />
    </div>
  )
}

export default Second
