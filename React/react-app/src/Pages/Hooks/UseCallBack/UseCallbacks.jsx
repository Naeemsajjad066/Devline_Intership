import React from 'react'
import WithoutCallBack from './WithoutUseCallBack'
import UseCallbacksPage from './UseCallbacksPage'

const UseCallbacks = () => {
  return (
    <>
<div>
    <h1>Without UseCallBack</h1>
    <WithoutCallBack/>
    <h1>With useCallback</h1>
    <UseCallbacksPage/>
    </div>    </>
  )
}

export default UseCallbacks
