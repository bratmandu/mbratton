import React, { useState } from 'react'
import {
  Link
} from 'react-router-dom'

function Nav() {
  const [show, setShow] = useState(false)
  const handleNavClick = () => {
    setShow(false)
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light mb-light">
      <div className="container-fluid">
        <h1 className="navbar-brand m-0 pe-3 me-3 border-end border-primary">Michael Bratton</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler01"
          aria-controls="navbarToggler01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarToggler01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/useEffect" className="nav-link" onClick={handleNavClick}>UseEffect Samples</Link>
            </li>
            <li className="nav-item">
              <Link to="/arrays" className="nav-link" onClick={handleNavClick}>Array Operation Samples</Link>
            </li>
            <li className="nav-item">
              <Link to="/jsonLoops" className="nav-link" onClick={handleNavClick}>JSON Loop Samples</Link>
            </li>
            <li className="nav-item">
              <Link to="/uxSampleOne" className="nav-link" onClick={handleNavClick}>UX Original Sample</Link>
            </li>
            <li className="nav-item">
              <Link to="/uxSampleTwo" className="nav-link" onClick={handleNavClick}>UX Stripped Sample</Link>
            </li>
            <li className="nav-item">
              <Link
                to="/callbacksNone"
                className="nav-link"
                onClick={handleNavClick}
              >
                useCallback Sample - without
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/callbacks" className="nav-link" onClick={handleNavClick}>useCallback Sample</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
