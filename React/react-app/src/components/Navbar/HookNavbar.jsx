import React from 'react'
import { NavLink } from 'react-router-dom'

const HookNavbar = () => {
    return (
        <nav style={{ width: "100%", height: "60px", marginTop: "10px" }}>
            <ul
                style={{
                    display: "flex", justifyContent: "center", alignItems: "center", listStyle: "none", padding: 0, margin: 0, backgroundColor: "#6d28d9", height: "60px", gap: "20px", fontSize: "20px"
                }}
            >

                <li>
                    <NavLink to="/hooks/useState" style={({ isActive }) => ({
                        textDecoration: "none", color: isActive ? "yellow" : "white", fontWeight: isActive ? "bold" : "normal"
                    })}
                    >
                        useState
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/hooks/useEffects" style={({ isActive }) => ({
                        textDecoration: "none", color: isActive ? "yellow" : "white", fontWeight: isActive ? "bold" : "normal"
                    })}>
                        useEffects
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/hooks/useReducer" style={({ isActive }) => ({
                        textDecoration: "none", color: isActive ? "yellow" : "white", fontWeight: isActive ? "bold" : "normal"
                    })}>
                        useReducer
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/hooks/useCallbacks" style={({ isActive }) => ({
                        textDecoration: "none", color: isActive ? "yellow" : "white", fontWeight: isActive ? "bold" : "normal"
                    })}>
                        useCallback
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/hooks/useRef" style={({ isActive }) => ({
                        textDecoration: "none", color: isActive ? "yellow" : "white", fontWeight: isActive ? "bold" : "normal"
                    })}>
                        useRef
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/hooks/useMemo" style={({ isActive }) => ({
                        textDecoration: "none", color: isActive ? "yellow" : "white", fontWeight: isActive ? "bold" : "normal"
                    })}>
                        useMemo
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default HookNavbar