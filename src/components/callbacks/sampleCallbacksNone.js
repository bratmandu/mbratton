import React, {
  useState
} from 'react'
import { string, func } from 'prop-types'
import MyHeader from '../standard/header/myHeader'

function MyButton({ handleClick, name }) {
  console.log(`${name} rendered!`)
  return <button type="button" onClick={handleClick}>{name}</button>
}

MyButton.propTypes = {
  handleClick: func,
  name: string
}

MyButton.defaultProps = {
  handleClick: () => {},
  name: ''
}

function UseCallbackSamples() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  console.log('main component rendered')

  return (
    <div>
      <MyHeader
        pageName="js callBack and JS hook useCallback examples"
      />
      <h5>With no useCallback:</h5>
      <div>When either button is clicked, will log out the component rendered log, and both buttonOne and buttonTwo rendered logs</div>
      {/*
        If you click button oneA, even though the value of countTwo never changes, the MyButton component is still re-rendered
        for both uses of it, because the main component is re-rendered
      */}
      <div className="mt-3">
        <div>{`Count one: ${countOne}`}</div>
      </div>
      <div>
        <div>{`Count two: ${countTwo}`}</div>
      </div>
      <MyButton
        handleClick={() => { setCountOne(countOne + 1) }}
        name="buttonOneA"
      />
      <MyButton
        handleClick={() => { setCountTwo(countTwo + 1) }}
        name="buttonTwoA"
      />
    </div>
  )
}

export default UseCallbackSamples
