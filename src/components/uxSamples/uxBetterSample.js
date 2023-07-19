import React from 'react'
import UxFormPoor from './uxFormPoor'
import UxFormBetter from './uxFormBetter'

function UXOrigSample() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-12">
          <h1>The difference UX makes</h1>
          <p>
            This components has two forms.
          </p>
          <div className="row px-3 mb-3">
            <div className="col col-lg-6 col-12 p-0 m-0 mb-3 px-3">
              <h2>
                Basic form:
              </h2>
              <p>
                This form is an example of poor UX considerations.
              </p>
              <UxFormPoor />
            </div>
            <div className="col col-lg-6 col-12 p-0 m-0 px-3">
              <h2>
                Improved from:
              </h2>
              <p>
                Here, I have applied a number of UX principles to improve this form.
              </p>
              <UxFormBetter />
            </div>
          </div>
          <div className="row px-3">
            <p>
              There are a number of differences here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UXOrigSample
