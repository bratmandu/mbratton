import React, {
  useState, useEffect
} from 'react'
import MyHeader from '../standard/header/myHeader'

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
    <>
      <MyHeader
        pageName="UseEffect samples:"
      />
      <div>
        {`Current floor: ${floorLevel}`}
        <br />
        {`Current section: ${section}`}
      </div>
      <br />

      <button
        type="button"
        onClick={() => {
          increaseFloorLevel()
        }}
      >
        Increase Floor Level
      </button>
      <br />
      <br />

      <button
        type="button"
        onClick={() => {
          setDeskSection('B')
        }}
      >
        Set Section to B
      </button>
      <br />
      <br />

    </>
  )
}

export default UseEffectSamples
