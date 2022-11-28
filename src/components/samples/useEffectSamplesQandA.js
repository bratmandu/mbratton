import React, {
  useState, useEffect
} from 'react'
import './samples.scss'

/*
  Questions (code below is copy of useEffectSamples):
  1 - User loads page, what logs are shown (+values of each if any)?
  A - ALPHA, BETA - floorLevel: 0, GAMMA - floorLevel: 0, DELTA - section: A

  2 - After page load and clearing of initial logs, user clicks 'Increase Floor Level', what logs are shown (+values)?
  A - INC A - floor after set: 0, BETA - floorLevel: 1, GAMMA - floorLevel: 1

  3 - After page load and clearing of initial logs, user clicks 'Set Section to B', what logs are shown (+values)?
  A - SET B - section after set: A, BETA - floorLevel: 0, DELTA - section: B
*/

function UseEffectSamples() {
  const [floorLevel, setFloorLevel] = useState(0)
  const [section, setSection] = useState('A')

  /**
   * UseEffect hooks, dependencies, and the current state of variables with useState:
   */

  useEffect(() => {
    console.log('Alpha - Empty dependency array')
  }, [])

  useEffect(() => {
    console.log('Beta - floorLevel useEffect no dependency: ', floorLevel)
  })

  useEffect(() => {
    console.log('Gamma - floorLevel useEffect with dependency: ', floorLevel)
  }, [floorLevel])

  useEffect(() => {
    console.log('Delta - section with dependency: ', section)
  }, [section])

  const increaseFloorLevel = () => {
    setFloorLevel(floorLevel + 1)
    console.log('INC A - floor Level after set: ', floorLevel)
  }

  const setDeskSection = (setTo) => {
    setSection(setTo)
    console.log('SET B - section after set: ', section)
  }

  return (
    <>
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
