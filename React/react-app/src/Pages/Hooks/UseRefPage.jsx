import React, { useRef, useState } from 'react'
import Heading from '../../components/Heading'

const UseRefPage = () => {
  const counterRef = useRef(0)
  const [count, setCount] = useState(0)

  console.log("Component re-rendered due to useState")

  const increaseRef = () => {
    counterRef.current += 1
    console.log("Ref value:", counterRef.current)
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <Heading heading={"UseRef"}/>

      <div style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px auto",
        width: "300px",
        borderRadius: "10px"
      }}>
        <h1>useRef value: {counterRef.current}</h1>

        <button onClick={increaseRef}>
          Increase Ref (no re-render)
        </button>
      </div>

      <div style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px auto",
        width: "300px",
        borderRadius: "10px"
      }}>
        <h1>useState value: {count}</h1>

        <button onClick={() => setCount(prev => prev + 1)}>
          Increase State (causes re-render)
        </button>
      </div>

    </div>
  )
}

export default UseRefPage