import React from 'react'
import {
  Routes, Route, Link
} from 'react-router-dom'
import Main from './components/main/main'
import Second from './components/second/second'
import Third from './components/third/third'
import Fourth from './components/fourth/fourth'
import Fifth from './components/fifth/fifth'
import Sixth from './components/sixth/sixth'

function App() {
  return (
    <div className="p-3">
      <div>Status text</div>
      <ul>
        <li>
          <Link to="/">UseEffect Samples</Link>
        </li>
        <li>
          <Link to="/second">Array Operation Samples</Link>
        </li>
        <li>
          <Link to="/third">JSON Loop Samples</Link>
        </li>
        <li>
          <Link to="/fourth">UX Original Sample</Link>
        </li>
        <li>
          <Link to="/fifth">UX Stripped Sample</Link>
        </li>
        <li>
          <Link to="/sixth">useCallback Sample</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/sixth" element={<Sixth />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
