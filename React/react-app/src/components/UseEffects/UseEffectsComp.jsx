import React, { useEffect, useState } from 'react'
import Heading from '../Heading'

const UseEffectsComp = () => {
  const [count, setCount] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Heading heading={"UseEffects"} />

      <div style={{ height: "50px",display:"flex",justifyContent:"center",alignItems:"center",gap:"30px" }}>
        <h1>Counter: {count}</h1>
        <button onClick={()=>{
          setCount(0)
        }}>Reset</button>
      </div>
    </>

  )
}

export default UseEffectsComp
