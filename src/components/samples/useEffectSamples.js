import React, {
  useState, useEffect
} from 'react'
import './samples.scss'

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
