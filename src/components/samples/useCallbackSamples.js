import React, {
  useState, useCallback
} from 'react'
import './samples.scss'

function MyButton({ handleClick, name }) {
  console.log(`${name} rendered!`)
  return <button type="button" onClick={handleClick}>{name}</button>
}

const MyButtonCallBack = React.memo(({ handleClick, name }) => {
  console.log(`${name} memoized version rendered!`)
  return <button type="button" onClick={handleClick}>{name}</button>
})

function UseCallbackSamples() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne])
  const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo])

  console.log('main component rendered')

  return (
    <div>
      <h2>
        JS hook useCallback example:
      </h2>
      <h5>With no useCallback:</h5>
      <div>When either button is clicked, will log out the component rendered log, and both buttonOne and buttonTwo rendered logs</div>
      {/*
        If you click button oneA, even though the value of countTwo never changes, the MyButton component is still re-rendered
        for both uses of it, because the main component is re-rendered
      */}
      <div>
        <div>{`Count one: ${countOne}`}</div>
      </div>
      <div>
        <div>{`Count two: ${countTwo}`}</div>
      </div>
      <br />
      <br />
      <MyButton
        handleClick={() => { setCountOne(countOne + 1) }}
        name="buttonOneA"
      />
      <br />
      <br />
      <MyButton
        handleClick={() => { setCountTwo(countTwo + 1) }}
        name="buttonTwoA"
      />
      <br />
      <br />
      <h5>With useCallback:</h5>
      <div>When either button is clicked, will log out the component rendered log, and only the log of the button clicked</div>
      {/*
        The MyButtonCallBack will only be re-rendered if the state of the handleClick's memoized function's dependency changes,
        So if you click button oneB, since memoizedSetCountOne has 'countOne' as a dependency,
        only that one of the MyButtonCallBack components will be re-rendered
      */}
      <MyButtonCallBack
        handleClick={memoizedSetCountOne}
        name="buttonOneB"
      />
      <br />
      <br />
      <MyButtonCallBack
        handleClick={memoizedSetCountTwo}
        name="buttonTwoB"
      />
    </div>
  )
}

export default UseCallbackSamples
