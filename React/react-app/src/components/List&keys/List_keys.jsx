import React from 'react'
import Heading from '../Heading'
function List_keys() {

    let arr = ["Naeem", "Sajjad", "Sharjeel", "Usama"]

    return (
        <>
              <Heading heading="List & Keys" />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{width:"400px", height:"200px", backgroundColor:"blue", borderRadius:"20px"}}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"200",height:"200px",color:"white",fontSize:"20px"}}>
                <ul >
                    {
                        arr.map((ar, index) => {
                            return (
                                <li style={{fontWeight:"bold"}} key={index}>{ar}</li>
                            )
                        })
                    }
                </ul>
                </div>

            </div>

        </div>
        </>

    )
}

export default List_keys
