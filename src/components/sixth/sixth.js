import React from 'react'
import MyHeader from '../header/myHeader'
import UseCallbackSamples from '../samples/useCallbackSamples'

function Sixth() {
  return (
    <div>
      <MyHeader
        headerName="Sample React App"
        pageName="js callBack and JS hook useCallback examples"
      />
      <hr />
      <UseCallbackSamples />
    </div>
  )
}

export default Sixth
