import React from 'react'
import Heading from '../../components/Heading'
import { useReducer } from 'react'

const initialState=0;
function reducer(state,action){
    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            if(state>0){
                return state-1;
            }
        case "reset":
            return 0;
        default:
            return state
    }
}

const UseReducerPage = () => {

    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <>
            <Heading heading={"UseReducer"} />
            <div style={{ height: "70vh", backgroundColor: "#0F172A", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "40%", height: "100%", backgroundColor: "#1E293B", borderRadius: "20px", display: "flex", alignItems: "center", flexDirection: "column", gap: "70px", color: '#CBD5E1' }}>
                    <h1>Counter</h1>
                    <h2>{count}</h2>
                    <div style={{display:"flex",gap:"10px"}}>
                        <button onClick={()=>dispatch({type:"increment"})} style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"Green",cursor:"pointer"}}>Increment</button>
                        <button onClick={()=>dispatch({type:"decrement"})} style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"Red",cursor:"pointer"}}>Decrement</button>
                        <button onClick={()=>dispatch({type:"reset"})} style={{width:"100px",height:"40px",borderRadius:"10px",backgroundColor:"Blue",cursor:"pointer"}}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseReducerPage
