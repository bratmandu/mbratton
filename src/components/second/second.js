import React from 'react'
import MyHeader from '../header/myHeader'
import './second.scss'
import ArrayOperationSamples from '../samples/arrayOperationSamples'

function Second() {
  return (
    <div>
      <MyHeader
        headerName="Sample React App"
        pageName="arrayOperation examples"
      />
      <hr />
      <ArrayOperationSamples />
    </div>
  )
}

export default Second
