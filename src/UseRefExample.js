import React, { useState, useRef } from 'react'

const UseRefExample = () => {
  const [state, setCount] = useState(0)
  const ourRef = useRef(null)

  const changeColorToPink = () => {
    ourRef.current.style.color = 'pink'
  }

  return (
    <>
      Click button to change color to pink: <h1 ref={ourRef}>{state}</h1>
      <button onClick={changeColorToPink}>+</button>
    </>
  )
}


export default UseRefExample
