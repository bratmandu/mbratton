import React from 'react'
import {
  Routes, Route, Link
} from 'react-router-dom'
import Nav from './utils/nav'
import MyHeader from './components/standard/header/myHeader'
import UseEffectSamples from './components/useEffects/sampleUseEffect'
import ArrayOperationSamples from './components/arrayOps/SampleArrayOperations'
import JsonLoopSamplesOptimised from './components/jsonLoops/jsonLoopsOptimised'
import UXOrigSample from './components/uxSamples/uxBetterSample'
import UXStrippedSample from './components/uxSamples/uxWorseSample'
import UseCallbackSamples from './components/callbacks/sampleCallbacks'
import UseCallbackSamplesNone from './components/callbacks/sampleCallbacksNone'

function App() {
  return (
    <div className="p-3">
      <MyHeader
        headerName="React Samples and Questions"
        pageName=""
      />
      <Nav />
      <Routes>
        <Route exact path="/" element={<UseEffectSamples />} />
        <Route path="/useEffect" element={<UseEffectSamples />} />
        <Route path="/arrays" element={<ArrayOperationSamples />} />
        <Route path="/jsonLoops" element={<JsonLoopSamplesOptimised />} />
        <Route path="/uxSampleOne" element={<UXOrigSample />} />
        <Route path="/uxSampleTwo" element={<UXStrippedSample />} />
        <Route path="/callbacksNone" element={<UseCallbackSamplesNone />} />
        <Route path="/callbacks" element={<UseCallbackSamples />} />
        <Route path="*" element={<UseEffectSamples />} />
      </Routes>
    </div>
  )
}

export default App
