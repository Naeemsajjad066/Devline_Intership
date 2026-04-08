import React from 'react'
import WithoutCallBack from './WithoutUseCallBack'
import UseCallbacksPage from './UseCallbacksPage'

const UseCallbacks = () => {
  return (
    <div style={{
      padding: "20px",
      maxWidth: "900px",
      margin: "0 auto"
    }}>

      {/* Without useCallback */}
      <div style={{
        marginBottom: "30px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>
        <h2 style={{ marginBottom: "10px" }}>
          Without useCallback
        </h2>
        <WithoutCallBack />
      </div>

      {/* With useCallback */}
      <div style={{
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>
        <h2 style={{ marginBottom: "10px" }}>
          With useCallback
        </h2>
        <UseCallbacksPage />
      </div>

    </div>
  )
}

export default UseCallbacks