import React, { useEffect } from 'react'
import {
  Routes, Route, Link, useLocation
} from 'react-router-dom'
import Main from './components/main/main'
import Second from './components/second/second'

function App() {
  const location = useLocation()

  useEffect(() => {
    console.log('location: ', location)
  }, [location])

  return (
    <div>
      <div>Status text</div>
      <ul>
        <li>
          <Link to="/">Employee Table</Link>
        </li>
        <li>
          <Link to="/secondary">Information</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/secondary" element={<Second />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
