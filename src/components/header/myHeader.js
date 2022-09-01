import React from 'react'
import { string } from 'prop-types'

export default function MyHeader(props) {
  const { headerName } = props
  return (
    <div>
      <h1>
        {headerName}
      </h1>
      <div className="brand-page-name">
        Department A
      </div>
    </div>
  )
}

MyHeader.propTypes = {
  headerName: string
}

MyHeader.defaultProps = {
  headerName: 'My Header'
}
