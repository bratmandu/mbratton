import React from 'react'
import {
  Routes, Route
} from 'react-router-dom'
import Nav from './utils/nav'
import Home from './components/home/home'
import UseEffectSamples from './components/useEffects/sampleUseEffect'
import ArrayOperationSamples from './components/arrayOps/sampleArrayOperations'
import JsonLoopSamplesOptimised from './components/jsonLoops/jsonLoopsOptimised'
import UXOrigSample from './components/uxSamples/uxBetterSample'
import UseCallbackSamples from './components/callbacks/sampleCallbacks'
import SampleApp from './components/sampleApp/sampleApp'
import './css/main.scss'

function App() {
  return (
    <div>
      <Nav />
      <div className="m-3 mb-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/useEffect" element={<UseEffectSamples />} />
          <Route path="/arrays" element={<ArrayOperationSamples />} />
          <Route path="/jsonLoops" element={<JsonLoopSamplesOptimised />} />
          <Route path="/uxSampleOne" element={<UXOrigSample />} />
          <Route path="/callbacks" element={<UseCallbackSamples />} />
          <Route path="/sampleApp" element={<SampleApp />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
