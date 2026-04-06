import React, { useContext } from 'react'
import { appContext } from '../../context/Context'

function Profile() {
  const { name, role, theme, setTheme } = useContext(appContext)
  const handleOnclick = () => {
    if (theme == "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }
  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        <h2>Name: {name ? name : "Waseem Sajjad"}</h2>
        <h2>Role: {role ? role : "Developer"}</h2>
        <h2>Current theme is {theme}</h2>
      </div>
      <button
        onClick={handleOnclick}
        style={{
          marginTop: "70px",
          padding: "12px 20px",
          backgroundColor: theme === "dark" ? "#1E1E1E" : "#EDEDED",
          color: theme === "dark" ? "#EDEDED" : "#121212",
          border: "1px solid #2A2A2A",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
          transition: "all 0.3s ease",
        }}
      >
        {theme=="dark"?"Light Mode":"Dark Mode"} 
      </button>    </>

  )
}

export default Profile
