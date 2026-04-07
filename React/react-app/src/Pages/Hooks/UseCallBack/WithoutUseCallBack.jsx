

import React, { useState } from 'react'

const Child = ({ onClick }) => {
  console.log("child is rerenderd")

  return (
    <button onClick={onClick}>Child button</button>
  )
}


const WithoutCallBack = () => {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count => count + 1)
  }
  console.log("parent rerenders")
  return (
    <>
      <div>
        <h2>counter: {count}</h2>
        <button onClick={handleClick}>parent Button</button>
        <Child onClick={handleClick} />
      </div>
      
    </>
  )
}

export default WithoutCallBack
