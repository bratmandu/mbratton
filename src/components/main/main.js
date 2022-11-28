import React from 'react'
import MyHeader from '../header/myHeader'
import './main.scss'
import UseEffectSamples from '../samples/useEffectSamples'

function Main() {
  return (
    <div>
      <MyHeader
        headerName="Sample React App"
        pageName="UseEffect examples"
      />
      <UseEffectSamples />
    </div>
  )
}

export default Main
