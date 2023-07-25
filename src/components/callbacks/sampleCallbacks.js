import React, {
  useState, useCallback
} from 'react'
import { string, func } from 'prop-types'
import callbackA from './images/callbackA.png'
import callbackB from './images/callbackB.png'
import callbackC from './images/callbackC.png'
import callbackD from './images/callbackD.png'

// non memoized component
function MyButton({ handleClick, text }) {
  console.log(`${text} regular component rerendered - which it will do if any state in it's parent
  component changes / or on load of main component`)
  return (
    <button
      type="button"
      className="btn btn-primary m-3 p-2"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

MyButton.propTypes = {
  handleClick: func,
  text: string
}

MyButton.defaultProps = {
  handleClick: () => {},
  text: ''
}

// menmoized component
const MyButtonCallBack = React.memo(({ handleClick, text }) => {
  console.log(`${text} memoized button component rerendered - because it's function prop
  uses useCallBack, and the value of that callback's dependency has changed / or on load of main component`)
  return (
    <button
      type="button"
      className="btn btn-primary m-3 p-2"
      onClick={() => {
        handleClick()
      }}
    >
      {text}
    </button>
  )
})

MyButtonCallBack.propTypes = {
  handleClick: func,
  text: string
}

MyButtonCallBack.defaultProps = {
  handleClick: () => {},
  text: ''
}

function UseCallbackSamples() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  const [countThree, setCountThree] = useState(0)

  const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne])
  const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo])
  const nonMemoizedSetCountThree = () => setCountThree(countThree + 1)

  console.log('Main component rendered - every time a state changes / or on load of main component')

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-12">
          <h1>The useCallback hook</h1>
          <p>
            To demonstrate the function of the useCallback hook, I have here 3 buttons. The first 2 buttons
            are rendered using a
            <strong> memoized component</strong>
            , whilst the third simply returns a regular
            component with a button.
          </p>
          <div className="card mb-img-card-lg float-end mx-3 mb-3">
            <img className="card-img-top p-3 pb-0" src={callbackA} alt="Array operation examples" />
            <div className="card-body">
              <p className="card-text">
                Showing the state variables in markup and components used.
              </p>
            </div>
          </div>
          {/*
            The MyButtonCallBack will only be re-rendered if the state of the handleClick's memoized function's
            dependency changes, So if you click button A, since memoizedSetCountOne has 'countOne' as a dependency,
            only that one of the MyButtonCallBack components will be re-rendered.
            The non-callback component 'MyButton' (for setCountThree) will rerender every time a state within this function changes.
          */}
          <div className="m-3">
            <div>{`Count one: ${countOne}`}</div>
            <div>{`Count two: ${countTwo}`}</div>
            <div>{`Count three: ${countThree}`}</div>
          </div>
          <MyButtonCallBack
            handleClick={memoizedSetCountOne}
            text="Memoized component A"
          />
          <MyButtonCallBack
            handleClick={memoizedSetCountTwo}
            text="Memoized component B"
          />
          <MyButton
            handleClick={nonMemoizedSetCountThree}
            text="Non-memoized component C"
          />
          <p>
            The handleClick method passed to the first two buttons will use a callback method that
            sets the state of the counter for that button to increase by one. The state is used
            as a
            <strong> dependency </strong>
            for the callback method.
          </p>
          <p>
            The third button, C, passes a nameless function - not using the useCallback hook - which will
            simply set the value of the state for that counter to increase by one.
          </p>
          <div className="card mb-img-card-md mx-3 mb-3">
            <img className="card-img-top p-3 pb-0" src={callbackB} alt="Array operation examples" />
            <div className="card-body">
              <p className="card-text">
                Showing the state variables and calback / non-callback methods.
              </p>
            </div>
          </div>
          <p>
            There is a console log in the main parent component, and one in both the standard and memoized
            components for the buttons.
          </p>
          <p>
            The effect here is, that the main component log will show anytime one of the three counters has their
            state changed, as expected. This is also true of the third button component C, which is not memoized
            and does not use useCallback as the handleClick method. So
            <strong> anytime any of the three counters changes </strong>
            state, the main component and the C button component, will log out their messages.
          </p>
          <div className="card mb-img-card-lg me-3 mb-3">
            <img className="card-img-top p-3 pb-0" src={callbackC} alt="Array operation examples" />
            <div className="card-body">
              <p className="card-text">
                The non-memoized component.
              </p>
            </div>
          </div>
          <p>
            What changing the state of the third button
            <strong> won&#39;t </strong>
            do, is log out the message from the memoized
            components that have useCallBack as their click handler. Buttons A and B both use the memoized
            component, and their click handler has a useCallback method with a dependency on their respective counters.
            This means that
            <strong>
              {` clicking button A or B, will only log out the main component log and their own, C will also
              log out as it does for any state change.`}
            </strong>
          </p>
          <div className="card mb-img-card-lg me-3 mb-3">
            <img className="card-img-top p-3 pb-0" src={callbackD} alt="Array operation examples" />
            <div className="card-body">
              <p className="card-text">
                The memoized component.
              </p>
            </div>
          </div>
          <p>
            To summarize, button A will log out the main component log plus the log for the memoized component for A,
            it will also log C. But not B
            Button B will log the memoized component for B, the main component, and C, but not A.
            Button C will log out just the main component and the log for C.
          </p>
          <p>
            Through this, we can specify which components should rerender every time the parent rerenders, or only
            if certain values in state change, ones that we make dependencies of the useCallback methods. This can lead
            to
            <strong> performance gains </strong>
            - if we memoize a component with a lot of operations inside it, then between parent
            component renders we don&#39;t always have to destroy/create a new child component every time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UseCallbackSamples
