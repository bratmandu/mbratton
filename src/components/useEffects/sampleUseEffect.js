import React, {
  useState, useEffect
} from 'react'
import useEffA from './images/useEff-A.png'
import useEffB from './images/useEff-B.png'

function UseEffectSamples() {
  const [floorLevel, setFloorLevel] = useState(0)
  const [section, setSection] = useState('A')

  /**
   * UseEffect hooks, dependencies, and the current state of variables with useState:
   */

  /*
    Questions (code below is copy of useEffectSamples):
    1 - User loads page, what logs are shown (+values of each if any)?
    A - ALPHA, BETA: 0, GAMMA: 0, DELTA: A, EPSILON

    2 - After page load and clearing of initial logs, user clicks 'Increase Floor Level', what logs are shown (+values)?
    A - LEVEL: 0, BETA: 1, GAMMA: 1, EPSILON

    3 - Then user clicks 'Set Section to B', what logs are added (+values)?
    A - SECTION: A, BETA: 1, DELTA: B, EPSILON

    4 - Then user clicks 'Set Section to B' a second time, what logs are added?
    A - just 'SECTION: B'

    5 - If component is unmounted, what logs will be added?
    A - 'ZETA' as below, if a useEffect has a return this is called on unmount
  */

  useEffect(() => {
    console.log('Alpha')
    return () => {
      console.log('ZETA')
    }
  }, [])

  useEffect(() => {
    console.log('Beta: ', floorLevel)
  })

  useEffect(() => {
    console.log('Gamma: ', floorLevel)
  }, [floorLevel])

  useEffect(() => {
    console.log('Delta: ', section)
  }, [section])

  useEffect(() => {
    console.log('Epsilon')
  })

  const increaseFloorLevel = () => {
    setFloorLevel(floorLevel + 1)
    console.log('LEVEL: ', floorLevel)
  }

  const setDeskSection = (setTo) => {
    setSection(setTo)
    console.log('SECTION: ', section)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-12">
          <h1>UseEffect samples</h1>
          <div>
            {`Current floor: ${floorLevel}`}
          </div>
          <div>
            {`Current section: ${section}`}
          </div>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              increaseFloorLevel()
            }}
          >
            Increase Floor Level
          </button>
          <button
            type="button"
            className="btn btn-primary m-3 p-2"
            onClick={() => {
              setDeskSection('B')
            }}
          >
            Set Section to B
          </button>
          <p>
            Here you see just a couple of buttons. One for &#39;Floor Level&#39; and one for
            &#39;Section&#39;. These are two
            <strong> State variables </strong>
            that are stored using the &#39;useState&#39; React hook.
          </p>
          <p>
            The purpose of this example, is to show how the useState and useEffect React hooks work,
            as well as illustrating how dependencies work with useEffect
          </p>
          <div className="card mb-img-card me-3 mb-3 float-end">
            <img className="card-img-top p-3 pb-0" src={useEffA} alt="UseEffect examples" />
            <div className="card-body">
              <p className="card-text">
                A little trick to show the asynchronous nature of hooks.
              </p>
            </div>
          </div>
          <p>
            The button to increase floor level, will call a method which sets the state of the floorLevel
            variable to it&#39;s value plus 1, then immediately logs out the value of the floorLevel state
            to the console. I have used this question in interviews to determine knowledge of how the hooks work,
            as it is common to see people assume that the log will show the result of the value + 1.
            Of course due to the asynchronous nature of useState, this will actually log out the current value
            before 1 is added.
          </p>
          <p>
            The second button is similar, but it&#39;s method will set the value of the section variable to B.
            The console will of course log out the previous value because of the asynchronous nature of useState.
            The importance of this is to do with the dependencies question, as setting a state var to the same value
            it has previously will not cause a rerender, even when the variable is a dependency in a useEffect.
          </p>
          <div className="card mb-card mb-3">
            <div className="card-body">
              <h5 className="card-title">Dependencies and useEffect</h5>
              <p className="card-text">
                So in this component, I have several useEffects, with differing dependencies. These dependencies
                will cause &#39;side effects&#39; to occurr. We can use this to cause things to happen, in a
                similar fashion to the old class based React lifecycle methods, such as onComponentDidMount, etc.
              </p>
              <p>
                With this we can employ useEffect and dependencies to make events happen on first page render,
                anytime any of the state variables are updated, or anytime a specific state variable has changed,
                or indeed when the component is destroyed.
              </p>
              <div className="card mb-img-card float-start me-3 mb-3">
                <img className="card-img-top p-3 pb-0" src={useEffB} alt="UseEffect examples" />
                <div className="card-body">
                  <p className="card-text">
                    I have these useEffects with various dependencies.
                  </p>
                </div>
              </div>
              <p className="pt-3">
                The first useEffect has a log of Alpha and a Zeta in the return. A useEffect&#39;s return statement
                will be called when the component is unmounted only. The empty dependency array means that Alpha
                will only be called on component mount.
              </p>
              <p>
                The Beta useEffect has no dependency array, logs out the floorLevel variable
                and acts as both componentDidMount and componentDidUpdate,
                it runs first on mount and then on every re-render of the whole component.
              </p>
              <p>
                The Gamma useEffect has a dependency array, which contains the floorLevel. This means it is
                called only when the value of floorLevel changes.
              </p>
              <p>
                Delta is the same as above but for section, and like the above will also be called when the value
                of section is changed. However the method to update section always sets it to B. This means that whilst
                Delta will be logged when it is first changed from A to B, subsequent hits on the method will keep
                setting it to B, so no change meaning no rerender.
              </p>
              <p>
                Epsilon will be called, like Beta, anytime anything is changed in state as it has no dependency array.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseEffectSamples
