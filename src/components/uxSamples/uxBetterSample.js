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
            UX describes how a piece of software feels to use. Prioritisation of features is based on
            <strong> commonly used functionality</strong>
            , placing what the majority of users interact with
            <strong> front and centre</strong>
            . The interface is presented in a way where
            <strong> user interaction is predicatible and expected </strong>
            with consistency in design, for example a save button is always bottom left regardless of page.
            Pre-existing conventions are used for icons and common actions. Appropriate
            <strong> feedback </strong>
            is given to the user and error handling is managed.
            Unselectable or disabled items can be hidden rather than showing invalid selectors.
          </p>
          <p>
            This components has two forms. The second form contains a number of improvements.
            This is by no means an exhaustive list, there are a lot of further UX enhancements that could
            be made here - for example highlighting the fields as required. But my goal here is to show
            at a basic level what a few simple changes can do.
          </p>
          <p>
            Much of UX is subject to opinion and there are choices other will disagree with, for example,
            using default or placeholder text, red highlights on error, formatting and many others.
          </p>
          <p>
            Right away you can see that I&#39;ve used
            <strong> input grouping </strong>
            so that certain types of input in the form are together and titles, this makes scanning the form
            a bit easier and lets a user know what kind of information each part of the form requires.
          </p>
          <p>
            The user in the first form may submit the form with no values selected, and any error wouldn&#39;t
            be reported until the endpoint returns. The newer form ensures that the form
            <strong> cannot be submitted </strong>
            until the required fields are populated. I&#39;ve left the submit button enabled here, as the browser
            functionality will take over and
            <strong> jump to the relevant unfilled field </strong>
            when a submit is attempted which
            I think is a decent user experience, though I have at times had cause to disable a submit on a form
            until relevant fields are completed - it really is down to user requirements.
          </p>
          <p>
            There are also formats defined for each field, such as numbers only for phone number, I could take
            this a step further and have region codes as a dropdown for example. I&#39;ve used some simple
            <strong> regEx </strong>
            to validate the text fields too. Message area has a limit on characters to prevent large
            amounts of data being sent in the payload to the endpoint.
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
        </div>
      </div>
    </div>
  )
}

export default UXOrigSample
