import React, { useState } from 'react'
import Heading from '../Heading';
function ConditionRendering() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const handleOnclick = () => {
        if (isLoggedIn == false) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }

    return (
        <>
              <Heading heading="conditional Rendering" />
            <div style={{ height: "200px", backgroundColor: isLoggedIn ? "blue" : "Red", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <div>
                    <h2>{isLoggedIn ? "You are Logged In!" : "Please Login First"}</h2>
                    <button onClick={handleOnclick}>{isLoggedIn ? "Logout" : "Login"}</button>
                    {isLoggedIn && <h1>Welcome Boy</h1>}
                </div>




            </div>
        </>

    )
}

export default ConditionRendering
