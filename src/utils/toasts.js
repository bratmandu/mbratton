import React from 'react'
import { string } from 'prop-types'

export default function CustomToast({
  id, className, header, text
}) {
  return (
    <div className="position-fixed bottom-0 end-0 p-3 mb-toast">
      <div id={id} className={`toast hide ${className}`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">{header}</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
        </div>
        <div className="toast-body">
          {text}
        </div>
      </div>
    </div>
  )
}

CustomToast.propTypes = {
  id: string.isRequired,
  className: string.isRequired,
  header: string.isRequired,
  text: string.isRequired
}
