import React from 'react'
import {
  Link
} from 'react-router-dom'

function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/useEffect" className="nav-link">UseEffect Samples</Link>
      </li>
      <li className="nav-item">
        <Link to="/arrays" className="nav-link">Array Operation Samples</Link>
      </li>
      <li className="nav-item">
        <Link to="/jsonLoops" className="nav-link">JSON Loop Samples</Link>
      </li>
      <li className="nav-item">
        <Link to="/uxSampleOne" className="nav-link">UX Original Sample</Link>
      </li>
      <li className="nav-item">
        <Link to="/uxSampleTwo" className="nav-link">UX Stripped Sample</Link>
      </li>
      <li className="nav-item">
        <Link to="/callbacksNone" className="nav-link">useCallback Sample - without</Link>
      </li>
      <li className="nav-item">
        <Link to="/callbacks" className="nav-link">useCallback Sample</Link>
      </li>
    </ul>
  )
}

export default Nav
