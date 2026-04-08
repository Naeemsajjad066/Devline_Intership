import React, { useState } from 'react'

const Child = ({ onClick }) => {
  console.log("child is rerenderd")

  return (
    <div style={{
      marginTop: "15px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px"
    }}>
      <h4>Child Component</h4>

      <button 
        onClick={onClick}
        style={{ padding: "5px 10px" }}
      >
        Child Button
      </button>
    </div>
  )
}

const WithoutCallBack = () => {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(prev => prev + 1)
  }

  console.log("parent rerenders")

  return (
    <div style={{
      padding: "20px",
      maxWidth: "400px",
      margin: "50px auto",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
      <h3>Parent Component</h3>

      <p style={{ fontWeight: "bold" }}>
        Counter: {count}
      </p>

      <button 
        onClick={handleClick}
        style={{ padding: "6px 12px", marginBottom: "10px" }}
      >
        Parent Button
      </button>

      <Child onClick={handleClick} />
    </div>
  )
}

export default WithoutCallBack