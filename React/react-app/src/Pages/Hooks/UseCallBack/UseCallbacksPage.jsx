

import React, { useCallback, useState } from 'react'

const Child = React.memo(({ onClick }) => {
  console.log("child is rerenderd")
  const [childcount,setChildCount]=useState(0)

  function handleChildclick(){
    setChildCount(childcount=>childcount+1)
  }
  return (
    <>
    <button onClick={onClick}>Child parent button</button>
    <button onClick={handleChildclick}>child button</button>

    </>
  )
})


const UseCallbacksPage = () => {
  const [count, setCount] = useState(0)

  const handleClick=useCallback(()=> {
    setCount(count => count + 1)
  },[])
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

export default UseCallbacksPage
