import React from 'react'
import {
  Routes, Route
} from 'react-router-dom'
import Nav from './utils/nav'
import UseEffectSamples from './components/useEffects/sampleUseEffect'
import ArrayOperationSamples from './components/arrayOps/SampleArrayOperations'
import JsonLoopSamplesOptimised from './components/jsonLoops/jsonLoopsOptimised'
import UXOrigSample from './components/uxSamples/uxBetterSample'
import UXStrippedSample from './components/uxSamples/uxWorseSample'
import UseCallbackSamples from './components/callbacks/sampleCallbacks'
import UseCallbackSamplesNone from './components/callbacks/sampleCallbacksNone'
import './css/main.scss'

function App() {
  return (
    <div>
      <Nav />
      <div>
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
    </div>
  )
}

export default App
