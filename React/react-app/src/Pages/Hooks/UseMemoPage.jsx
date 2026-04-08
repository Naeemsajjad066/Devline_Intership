import React, { useMemo, useState } from 'react'

const UseMemoPage = () => {
  const [count, setCount] = useState(1)
  const [status, setStatus] = useState("not Render")

  const multiplication = useMemo(() => {
    console.log("Expensive calculation running...")
    return count * 5
  }, [count])

  const toggleStatus = () => {
    setStatus(prev => prev === "not Render" ? "Render" : "not Render")
  }

  return (
    <div style={{
      fontFamily: "Arial",
      textAlign: "center",
      marginTop: "40px"
    }}>
      <h1 style={{ marginBottom: "20px" }}>useMemo Demo</h1>

      <div style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "15px auto",
        width: "300px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h2>Count: {count}</h2>
        <h3>Multiplied: {multiplication}</h3>

        <button
          style={{
            padding: "10px 15px",
            marginTop: "10px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
          onClick={() => setCount(prev => prev + 1)}
        >
          Increase Number
        </button>
      </div>

      <div style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "15px auto",
        width: "300px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h2>Status: {status}</h2>

        <button
          style={{
            padding: "10px 15px",
            marginTop: "10px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
          onClick={toggleStatus}
        >
          Toggle Status
        </button>
      </div>
    </div>
  )
}

export default UseMemoPage  