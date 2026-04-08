import React, { useCallback, useState } from 'react'

const Child = React.memo(({ onClick }) => {
  console.log("child is rerenderd")
  const [childcount, setChildCount] = useState(0)

  function handleChildclick() {
    setChildCount(prev => prev + 1)
  }

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
        style={{ marginRight: "10px", padding: "5px 10px" }}
      >
        Parent Trigger
      </button>

      <button 
        onClick={handleChildclick}
        style={{ padding: "5px 10px" }}
      >
        Child Count: {childcount}
      </button>
    </div>
  )
})

const UseCallbacksPage = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

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
        Count: {count}
      </p>

      <button 
        onClick={handleClick}
        style={{ padding: "6px 12px", marginBottom: "10px" }}
      >
        Increment Parent
      </button>

      <Child onClick={handleClick} />
    </div>
  )
}

export default UseCallbacksPage