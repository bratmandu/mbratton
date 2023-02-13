import React from 'react'
import { string } from 'prop-types'

export default function MyHeader(props) {
  const { headerName, pageName } = props
  return (
    <div>
      {headerName && (
        <h1>
          {headerName}
        </h1>
      )}
      {pageName && (
        <h3>
          {pageName}
        </h3>
      )}
    </div>
  )
}

MyHeader.propTypes = {
  headerName: string,
  pageName: string
}

MyHeader.defaultProps = {
  headerName: '',
  pageName: ''
}
