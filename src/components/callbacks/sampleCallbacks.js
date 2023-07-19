import React, {
  useState, useCallback
} from 'react'
import { string, func } from 'prop-types'

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

const MyButtonCallBack = React.memo(({ handleClick, name }) => {
  console.log(`${name} memoized version rendered!`)
  return <button type="button" onClick={handleClick}>{name}</button>
})

MyButtonCallBack.propTypes = {
  handleClick: func,
  name: string
}

MyButtonCallBack.defaultProps = {
  handleClick: () => {},
  name: ''
}

function UseCallbackSamples() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne])
  const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo])

  console.log('main component rendered')

  return (
    <div>
      <h5>With useCallback:</h5>
      <div>When either button is clicked, will log out the component rendered log, and only the log of the button clicked</div>
      {/*
        The MyButtonCallBack will only be re-rendered if the state of the handleClick's memoized function's dependency changes,
        So if you click button oneB, since memoizedSetCountOne has 'countOne' as a dependency,
        only that one of the MyButtonCallBack components will be re-rendered
      */}
      <div className="mt-3">
        <div>{`Count one: ${countOne}`}</div>
      </div>
      <div>
        <div>{`Count two: ${countTwo}`}</div>
      </div>
      <MyButtonCallBack
        handleClick={memoizedSetCountOne}
        name="buttonOneB"
      />
      <MyButtonCallBack
        handleClick={memoizedSetCountTwo}
        name="buttonTwoB"
      />
    </div>
  )
}

export default UseCallbackSamples
