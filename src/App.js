import React from 'react'
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import Main from './components/main/main'
import Second from './components/second/second'

function App() {
  return (
    <div>
      <div>Status text</div>
      <Router>
        <ul>
          <li>
            <Link to="/">Employee Table</Link>
          </li>
          <li>
            <Link to="/secondary">Information</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/secondary" element={<Second />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
